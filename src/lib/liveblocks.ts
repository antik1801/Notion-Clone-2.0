import { Liveblocks } from "@liveblocks/node";

const key = process.env.LIVEBLOCKS_PRIVATE_KEY

const liveblocks = (() => {
  if (!key) {
    throw new Error("Liveblocks secret key is not available");
  }
  return new Liveblocks({
    secret: key,
  });
})();

export default liveblocks;
