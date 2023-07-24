/*
 * @Author: nbn
 * @Date: 2023-07-24 22:00:22
 * @LastEditors: nbn
 * @LastEditTime: 2023-07-24 22:32:38
 * @FilePath: /workspace/test-composition-react/src/App.tsx
 * @Description:
 */

// import React from "react";
import { designComponent, ref } from "plain-design-composition";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";

const App = designComponent({
  name: "test",
  setup: () => {
    const count = ref(0);
    return () => (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            onClick={() => {
              count.value += 1;
            }}
          >
            {count.value}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  },
});

export default App;
