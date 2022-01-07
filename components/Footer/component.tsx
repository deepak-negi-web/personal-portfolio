import { Container } from "components";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <Container>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/deepak-negi-web/personal-portfolio"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Developed by Deepak Negi © {new Date().getFullYear()}
        </a>
      </p>
    </Container>
  );
};
