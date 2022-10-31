/**
 * @file This file is created automatically at build time.
 * more info: https://docs.orgasmo.dev/
 */

import ーorgasmoーadminーdriver from "@orgasmo/admin/driver";
import ーorgasmoーmongo from "@orgasmo/mongo";
import headerーlinks from "./drivers/common/header/links.export.js";

const drivers = ["@orgasmo/admin/driver", "@orgasmo/mongo"];

const driver = {
  ...ーorgasmoーadminーdriver,
  ...ーorgasmoーmongo,
  ["header.links"]: headerーlinks,
};

driver["header"] = {};
driver["header"]["links"] = headerーlinks;

export default driver;

for (const driverName of drivers) {
  const startMethodName = `${driverName.replace(/\//g, ".")}.start`;
  if (driver[startMethodName]) {
    driver[startMethodName](driver, drivers);
  }
}
