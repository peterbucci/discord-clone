import createDoc from "helpers/create_doc";

async function createCategory(name, server, order) {
  const categoryData = {
    name,
    server,
    order,
  };
  return await createDoc(["servers", server, "categories"], categoryData);
}

async function createChannel(name, server, category, type, order) {
  const channelData = {
    name,
    type,
    category,
    order,
  };

  return await createDoc(
    ["servers", server, "categories", category, "channels"],
    channelData
  );
}

async function joinServer(userId, serverId) {
  return await createDoc(
    ["users", userId, "servers"],
    { id: serverId },
    serverId
  );
}

export default async function createServer(
  serverName,
  { categories },
  user,
  closeMenu
) {
  if (serverName.length) {
    const serverData = {
      name: serverName,
      tag: serverName
        .split(" ")
        .map((w) => w.charAt(0))
        .join(""),
    };
    const serverDoc = await createDoc(["servers"], serverData);
    categories.forEach((category, i) =>
      createCategory(category.name, serverDoc.id, i).then((doc) =>
        category.channels.forEach((channel, j) => {
          createChannel(channel.name, serverDoc.id, doc.id, channel.type, j);
        })
      )
    );
    joinServer(user, serverDoc.id).then(() => closeMenu());
  }
}
