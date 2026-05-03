import TopicsListClient from "./TopicsListClient";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}topics`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch topics");
    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
    return { topics: [] };
  }
};

export default async function TopicsList() {
  const { topics = [] } = (await getTopics()) || {};

  return <TopicsListClient topics={topics} />;
}
