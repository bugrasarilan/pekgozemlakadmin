import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize your tasks", "Güvenilir");
  return <LayoutRoutes title="Bütün Mülkler" tasks={tasks}></LayoutRoutes>;
};

export default Home;
