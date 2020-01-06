import React from "react";

const App: React.FC = () => {
  return (
    <>
      <div
        className="bg-dim full-bg-size"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1570269691511-2a0007f5fe6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80)`
        }}
      ></div>
      <div className="w-100 my-8 m-auto sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 rounded-lg bg-white-transparent text-center">
        <img
          src="/profile.png"
          className="rounded-full h-24 lg:h-32 mx-auto opacity-100 m-3"
          alt="Influx Consulting"
        />
        <h1 className="text-3xl text-center">Influx Consulting</h1>
        <p>Hi, I'm Vincent.</p>

        <div className="text-left">
          <p className="mb-4">
            I AM
            <br />A pragmatic full stack developer with a lot of experience in
            e-commerce both large and small scale. I combine good communication,
            security awareness, agile workethics, devops/devsec mentality and a
            drive to create great software for stakeholders and end-users.
          </p>
          <p className="mb-4">
            I LOVE
            <br />
            All things new, cloud solutions, frontend tech like React, Asp.Net
            Core, micro-services architecture, software security, blockchain and
            container technology like docker drive me to keep learning and
            building great software.
          </p>
        </div>
        <p className="flex justify-center mt-4 text-center">
          <a
            className="text-center"
            href="https://www.linkedin.com/in/vvandoesburg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" className="w-12" alt="LinkedIn Profile" />
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
