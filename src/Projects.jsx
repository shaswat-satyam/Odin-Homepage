import Project from "./Project";
function Projects() {
  return (
    <>
      <div className="w-screen  place-self-center px-10 py-10 ">
        <h1 className="text-4xl py-5 text-center 2xl:text-left">My Works</h1>
        <div className="grid 2xl:grid-cols-3 gap-14 w-full md:grid-cols-2 sm:grid-cols-1">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
}
export default Projects;
