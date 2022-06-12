// @ts-ignore
import React, { Children, useState } from "react";
import { Browser } from "react-window-ui";
import Typewriter from "typewriter-effect";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { motion } from "framer-motion";
import { Popover, Text } from "@mantine/core";

interface TerminalProps {
  command: string;
  children?: JSX.Element;
}

const TerminalWindow = ({ command, children }: TerminalProps) => {
  const [termHover, setTermHover] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="installationContainer">
      <Browser
        background="lightgray"
        className="terminalContainer"
        onMouseOver={(_) => setTermHover(true)}
        onMouseLeave={(_) => setTermHover(false)}
      >
        <pre>
          <code>
            <Typewriter
              options={{
                strings: [command],
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </pre>
        <motion.div
          className="copy"
          animate={{ opacity: termHover ? 1 : 0 }}
          onClick={() => {
            setCopied(true);
            setTimeout((_) => setCopied(false), 1000);
            navigator.clipboard.writeText(command);
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Popover
            opened={copied}
            onClose={() => setCopied(false)}
            target={<HiOutlineClipboardCopy size={20} />}
            position='right'
            placement="center"
            transition="fade"
            trapFocus={false}
            withArrow
            spacing="sm"
          >
            <div style={{ display: "flex" }}>
              <Text size='sm'>Copied!</Text>
            </div>
          </Popover>
        </motion.div>
      </Browser>
      {children}
    </div>
  );
};

export default TerminalWindow;