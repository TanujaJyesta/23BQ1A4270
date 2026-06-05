console.log("Program started");
const notifications = [
    {
        "ID": "bcda8430-945b-476e-8df9-30712b942d3a",
        "Type": "Placement",
        "Message": "Alphabet Inc. Class A hiring",
        "Timestamp": "2026-06-04 18:19:16"
    },
    {
        "ID": "3d7c7922-8171-4be0-a8d6-86760fd4742c",
        "Type": "Result",
        "Message": "project-review",
        "Timestamp": "2026-06-04 17:49:01"
    },
    {
        "ID": "d20c591c-2c1a-4d37-8297-93b05fa35ef8",
        "Type": "Placement",
        "Message": "CSX Corporation hiring",
        "Timestamp": "2026-06-05 02:48:46"
    },
    {
        "ID": "9360a6a4-7156-451d-8e97-4744c52cc677",
        "Type": "Result",
        "Message": "internal",
        "Timestamp": "2026-06-05 02:48:31"
    },
    {
        "ID": "d30e7d7f-661e-4ffc-a992-57d9ade17e05",
        "Type": "Placement",
        "Message": "Tesla Inc. hiring",
        "Timestamp": "2026-06-04 15:18:16"
    },
    {
        "ID": "cfb07b78-cf5c-40db-a130-8cc865bc418f",
        "Type": "Result",
        "Message": "mid-sem",
        "Timestamp": "2026-06-04 14:18:01"
    },
    {
        "ID": "e9905ccf-2876-43a6-95ab-79b1c251f002",
        "Type": "Placement",
        "Message": "Alphabet Inc. Class A hiring",
        "Timestamp": "2026-06-04 15:17:46"
    },
    {
        "ID": "64a04f92-72c5-4475-ab20-f12cb9f0112e",
        "Type": "Placement",
        "Message": "TSMC hiring",
        "Timestamp": "2026-06-04 14:17:31"
    },
    {
        "ID": "a8cd6eef-9e2d-4f29-b081-1a6956d63b01",
        "Type": "Event",
        "Message": "tech-fest",
        "Timestamp": "2026-06-04 15:17:16"
    },
    {
        "ID": "a9dc10a0-c69b-4dd3-9850-6e7b18db7d02",
        "Type": "Result",
        "Message": "end-sem",
        "Timestamp": "2026-06-04 06:17:01"
    },
    {
        "ID": "9fcf68f7-cc12-42a0-adef-4d8fa3689a5a",
        "Type": "Event",
        "Message": "induction",
        "Timestamp": "2026-06-04 05:46:46"
    },
    {
        "ID": "84cfac1c-8903-41eb-baab-6b9cfd850cdc",
        "Type": "Placement",
        "Message": "Berkshire Hathaway Inc. hiring",
        "Timestamp": "2026-06-05 01:46:31"
    },
    {
        "ID": "1b36d7d1-b2d6-4c5d-8e9c-3319cd066d3b",
        "Type": "Result",
        "Message": "external",
        "Timestamp": "2026-06-05 00:46:16"
    },
    {
        "ID": "598a6385-6bbc-445a-8ecd-1c3ddb7cc3c3",
        "Type": "Placement",
        "Message": "Apple Inc. hiring",
        "Timestamp": "2026-06-04 05:46:01"
    },
    {
        "ID": "4b0c05b4-4d0d-46db-ab92-2431a2a97fd4",
        "Type": "Placement",
        "Message": "TSMC hiring",
        "Timestamp": "2026-06-05 00:15:46"
    },
    {
        "ID": "102c5013-3f46-42ba-981a-df549f4b9a12",
        "Type": "Placement",
        "Message": "Advanced Micro Devices Inc. hiring",
        "Timestamp": "2026-06-04 13:45:31"
    },
    {
        "ID": "3399d64b-284a-4eef-bbff-b7ff36370e94",
        "Type": "Event",
        "Message": "cult-fest",
        "Timestamp": "2026-06-04 21:15:16"
    },
    {
        "ID": "1009ddb2-c6c5-4255-938b-9d1623d28950",
        "Type": "Event",
        "Message": "tech-fest",
        "Timestamp": "2026-06-05 02:15:01"
    },
    {
        "ID": "fe695830-7f90-4f37-a791-7e021b494d82",
        "Type": "Result",
        "Message": "internal",
        "Timestamp": "2026-06-04 09:44:46"
    },
    {
        "ID": "3e8bde25-996f-476c-bad1-b1cc62c344ae",
        "Type": "Event",
        "Message": "traditional-day",
        "Timestamp": "2026-06-04 21:44:31"
    }
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const top10 = [...notifications]
  .sort((a, b) => {
    const weightA = weights[a.Type] || 0;
    const weightB = weights[b.Type] || 0;
    
    if (weightB !== weightA) {
      return weightB - weightA; 
    }
    
    return b.Timestamp.localeCompare(a.Timestamp);
  })
  .slice(0, 10);

console.log("Top 10 Notifications with Priority\n");
top10.forEach((n, index) => {
  console.log(`${index + 1}. ${n.Type} | ${n.Message} | ${n.Timestamp}`);
});