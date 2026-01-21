import { ReactElement } from "react";

const index = ({
  containerClassName,
  subContainer,
  subContainerClassName,
  children,
}: {
  containerClassName: string;
  subContainer: boolean;
  subContainerClassName: string;
  children: ReactElement;
}) => {
  return (
    <div className={containerClassName}>
      {subContainer ? (
        <div className={subContainerClassName}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default index;
