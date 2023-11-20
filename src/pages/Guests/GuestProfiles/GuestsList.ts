type Guest = {
	name: string;
	description: string;
};

type GuestsList = Guest[];

export const guestsList: GuestsList = [
	{
		name: 'Arthur McDonald',
		description:
			"Arthur McDonald is a man with little known history. For those knowledgeable enough, he is a hit-man for hire. What he did, who he was or why he's doing it is of little importance, but he's completed a job for the Croix family before. He was employed to [REDACTED] by the father. A splendid job. The invitation to this Christmas party was a surprise, but he's intrigued and willing to bite.",
	},
	{
		name: 'Dante Bellucci',
		description:
			"Dante Bellucci is a man of questionable profession and morals. Being as charitable as possible, he is a loan shark. While his business may seem legal on the surface, he is no stranger to the land of crime. He will use any means necessary to get what he is owed and then some. He's come to know the Croix family as they proved to be a good source of funds for his business. Be it lending or borrowing, they've proved to be valuable and trustworthy clients thus far.",
	},
	{
		name: 'Father Raphael',
		description:
			"Father Raphael is a priest from the Vatican. He's a close friend of the Croix family and has personally baptised both of the siblings. While generally not of great renown, he is quite loved by the people that know him, although his preaching can grow tiring at times.",
	},
	{
		name: 'Genevieve Auclair',
		description:
			'Genevieve Auclair is a distinguished lady from Paris. Old friend of the family, she has always brought a sense of elegance to any room she stepped in, turning the eyes of men and women alike.',
	},
	{
		name: 'Heidi Rosengart',
		description:
			"Heidi Rosengart is a musician from Germany. She is a renowned violinist who has performed in many countries around the world. She's caught the favour of the Croix family who has come to love her performances. Whilst she'd generally be invited to perform, this time around she was invited as a guest.",
	},
	{
		name: "Richard O'Connell",
		description:
			"Richard O'Connell is a detective of questionable origins. Although he is known for his case solving skills, he is also renowned for his drinking tendencies. A sort of drunken master of detectives he's made a name for himself as a private investigator and he came to know the Croix siblings from a case of earring theft he's solved for Estelle during the last Christmas party. He was now surprisingly invited to the party as a guest, rather than an investigator.",
	},
	{
		name: 'Viktor Koslov',
		description:
			'Viktor Kozlov is a physicist from the great mother nation. Having published many revolutionary works in the world of physics, he is widely renowned for his logical mind and his ability to solve any problem. He came to know the Croix family through a project he worked on with their father and has been a close friend of the family ever since.',
	},
];
