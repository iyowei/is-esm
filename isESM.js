import { readFile, readFileSync } from "fs";

import Walker from "node-source-walk";
import types from "ast-module-types";

export function isESM(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, file) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(walk(file));
    });
  });
}

export function isESMSync(path) {
  return walk(readFileSync(path, "utf-8"));
}

function walk(source) {
  const WALKER = new Walker();
  let result = false;

  let hasES6Import = false;
  let hasES6Export = false;
  let hasDynamicImport = false;

  function esmDetector(node) {
    if (types.isAMDDriverScriptRequire(node)) {
      hasAMDTopLevelRequire = true;
    }

    if (types.isES6Import(node)) {
      hasES6Import = true;
    }

    if (types.isES6Export(node)) {
      hasES6Export = true;
    }

    if (hasES6Import || hasES6Export || hasDynamicImport) {
      result = true;
      WALKER.stopWalking();
      return;
    }
  }

  WALKER.walk(source, esmDetector);

  return result;
}
