import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "mantine-remix",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, "site");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
