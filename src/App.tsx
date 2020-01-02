import React from "react";

const App: React.FC = () => {
  return (
    <div
      className="bg-dim full-bg-size"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1570269691511-2a0007f5fe6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80)`
      }}
    >
      <div className="w-100 md:w-1/2 lg:w-1/3 p-5 m-6 rounded-lg bg-white-transparent text-center">
        <img
          src="/profile.png"
          className="rounded-full h-24 lg:h-32 mx-auto opacity-100 m-3"
          alt="Influx Consulting"
        />
        <h1 className="text-3xl text-center">Influx Consulting</h1>
        <p>Hi, I'm Vincent.</p>
        <p className="block mt-4 text-center">
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
    </div>
  );
};

export default App;
