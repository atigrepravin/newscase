const host = "https://www.bloombergquint.com";
export const getCollections = async (collection) => {
  const response = await fetch(`${host}/api/v1/collections/${collection}`);
  const result = await response.json();
  return result;
};
