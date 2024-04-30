import Counter from "../components/counter/Counter";

const ComponentDevelopment = () => {
  const initialData = "Data";

  return (
    <>
      <Counter initialData={"Money"} />
      <Counter initialData={"Info"} />
    </>
  );
};

export default ComponentDevelopment;
