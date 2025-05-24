"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsListLoggedIn() {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		const getTopics = async () => {
			try {
				const res = await fetch("/api/topics", {
					cache: "no-store",
				});
				if (!res.ok) {
					throw new Error("Failed to fetch topics");
				}
				const data = await res.json();
				setTopics(data.topics || []);
			} catch (error) {
				console.error("Error loading topics:", error);
			}
		};

		getTopics();
	}, []);

	return (
		<>
			{topics.map((topic) => (
				<div
					className="p-4 border border-slate-300 flex justify-between gap-5 items-start mb-5"
					key={topic._id}
				>
					<div>
						<h2 className="font-bold text-2xl">{topic.title}</h2>
						<div>{topic.description}</div>
					</div>
					<div className="flex gap-2">
						<RemoveBtn id={topic._id} />
						<Link href={`editTopic/${topic._id}`}>
							<HiPencilAlt size={24} />
						</Link>
					</div>
				</div>
			))}
		</>
	);
}
