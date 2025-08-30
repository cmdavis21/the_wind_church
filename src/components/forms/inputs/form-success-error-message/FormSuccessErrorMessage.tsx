import React from "react";

import CircleCheck from "@/components/icons/circleCheck";
import SolidCircleX from "@/components/icons/solidCircleX";

interface FormSuccessErrorMessageProps {
  error: boolean;
  message: string;
  refreshForm?: () => void;
  className?: string;
  dark?: boolean;
}

const FormSuccessErrorMessage: React.FC<FormSuccessErrorMessageProps> = ({
  error = false,
  message,
  refreshForm,
  className,
  dark,
}) => (
  <div
    className={`${className ?? ""} flex gap-sm p-md rounded-lg ${
      error
        ? `${dark ? "bg-red/50" : "bg-gradient-to-b from-red/20"}`
        : `${dark ? "bg-green/50" : "bg-gradient-to-b from-green/20"}`
    }`}
  >
    <div className="bg-white/80 border border-white p-[6px] rounded-full h-fit">
      {error ? (
        <SolidCircleX className="fill-red" />
      ) : (
        <CircleCheck className="fill-green" />
      )}
    </div>

    <div className="flex flex-col gap-[2px] -mt-[2px]">
      <h5 className="font-bold">{error ? "Oh no..." : "Success!"}</h5>
      <p>{message}</p>
      {refreshForm && (
        <button
          type="button"
          onClick={refreshForm}
          className="underline text-blue w-fit"
        >
          New submission? Refresh form.
        </button>
      )}
    </div>
  </div>
);

export default FormSuccessErrorMessage;
