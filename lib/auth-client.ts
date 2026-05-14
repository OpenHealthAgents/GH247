import { createAuthClient } from "better-auth/react";
import { getBaseUrl } from "./region-shared";

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});
