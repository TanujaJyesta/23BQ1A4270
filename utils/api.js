export const fetchNotifications = async (params = {}) => {
  try {
    const url = new URL(
      "http://4.224.186.213/evaluation-service/notifications"
    );

    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== "") {
        url.searchParams.append(key, params[key]);
      }
    });

    const res = await fetch(url.toString(), {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("API response not ok");
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};