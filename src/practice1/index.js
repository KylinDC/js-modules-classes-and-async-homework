import getURL from "./utils";
import { ADDRESS, PATH, PORT } from "./constant";

export { REGION as region } from "./constant";

export const url = getURL(ADDRESS, PORT, PATH);
