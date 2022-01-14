const CLIENT_ID = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

export const fetchNewData = async (newPage) => {
  const url = `https://api.unsplash.com/photos/?page=${newPage}&client_id=${CLIENT_ID}`;
  const response = await fetch(url, { method: "get" });
  return response;
};
