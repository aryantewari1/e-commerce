import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return <h1 className="text-4xl">{err.statusText}</h1>;
};

export default ErrorPage;
