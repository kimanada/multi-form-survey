import { useRef, useState } from "react";
import { useSurveyStore } from "../../store";
import SectionView from "./SectionView";
import { observer } from "mobx-react-lite";
import { QuestionData, SectionData } from "../../types/app";
import callApi from "../../utils/api";
import { useParams } from "react-router";

const SectionListView = observer(function SectionListView() {
  const surveyStore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const data = useRef<Record<SectionData['id'], Record<QuestionData['id'], string | string[]>>>({});
  const last = currentSection === surveyStore.sections.length - 1;
  const { surveyId } = useParams<{ surveyId: string }>();

  const handleNext = () => {
    if (last) {
      // submit
      callApi(`/surveys/${surveyId}/responses`, {
        method: 'POST',
        body: data.current,
      });
      return;
    }
    setCurrentSection(currentSection + 1);
  };

console.log('sections length', surveyStore.sections.length);
console.log('currentSection', currentSection);
console.log('last', last);

  const saveData = (sectionData: Record<QuestionData['id'], string | string[]>) => {
    data.current[surveyStore.sections[currentSection].id] = sectionData;
  };

  return (
    <SectionView 
      section={surveyStore.sections[currentSection]}
      last={last}
      onSave={saveData}
      onNext={handleNext}
    />
  );
});

export default SectionListView;