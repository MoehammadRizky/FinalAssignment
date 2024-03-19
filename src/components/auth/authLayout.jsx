import React, { Children } from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="2-[230px]">{children}</div>
    </main>
  );
};

export default AuthLayout;
