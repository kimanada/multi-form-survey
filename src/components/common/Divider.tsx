import classNames from "classnames";

interface Props {
  direction?: 'horizontal' | 'vertical';
}

export default function Divider({ className, direction = 'horizontal' }: Cn<Props>) {
  if (direction === 'horizontal') {
    return (
      <hr className={classNames('w-full border-t-1 border-gray200', className)} />
    );
  }
  return (
    <hr className={classNames('h-full border-l-1 border-gray200', className)} />
  );
}