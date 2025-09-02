import { toJS } from "mobx/src/internal";
import SectionEditorList from "../components/edit/SectionEditorList";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function EditPage() {
  const surveyStore = useSurveyStore();
  const { surveyId } = useParams<{ surveyId: string }>();

  useEffect(() => {
    const id = parseInt(surveyId ?? '', 10);
    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyId, surveyStore]);

  const handleSubmit = () => {
    callApi(`/surveys/${surveyId}`, {
      method: 'PUT',
      body: toJS({ sections: surveyStore.sections }),
    });
  };

  return (
    <>
    <div><button onClick={handleSubmit}>보내기</button></div>
      <SectionEditorList />
    </>
  );
}