import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-2">
      <Spinner size="xl" />
    </div>
  );
};

export default loading;
