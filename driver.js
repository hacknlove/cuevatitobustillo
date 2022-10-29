/**
 * @file This file is created automatically at build time.
 * more info: https://docs.orgasmo.dev/
 */

import ーorgasmoーadminーdriver from "@orgasmo/admin/driver";
import ーorgasmoーjson from "@orgasmo/json";

const drivers = ["@orgasmo/admin/driver","@orgasmo/json"];

const driver = {
  ...ーorgasmoーadminーdriver,
  ...ーorgasmoーjson,
}



export default driver;

for (const driverName of drivers) {
  const startMethodName = `${driverName.replace(/\//g, '.')}.start`;
  if (driver[startMethodName]) {
    driver[startMethodName](driver, drivers);
  }
}
