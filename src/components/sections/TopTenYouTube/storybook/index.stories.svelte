<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import TopTenYouTube from "../index.svelte";
  import LiteYouTube from "../../../videos/LiteYouTube/index.svelte";

  let argTypes = {
    videoData: { control: "objet" },
  };

  let videoData = [
    {
      videoId: "wd4YPsIh7h0",
      title:
        "A robotic Petri dish: How to grow human cells in a robot shoulder",
      authors: ["Karen Sutherland", "Alison Clark", "Lauren Fisher"],
      institution: "Massachusetts Institute of Technology (MIT)",
    },
    {
      videoId: "VaXrX0veR9Y",
      title:
        "Lost beneath the leaves: Lasers reveal an ancient Amazonian civilisation",
      authors: ["Jessica Poole", "Blake Avery", "Boris Welch"],
      institution: "University of Oxford",
    },
    {
      videoId: "fi3pGplAxy0",
      title: "A new kind of cell division",
      authors: ["Samantha Clarkson", "Emma Parr", "Robert McDonald"],
      institution: "Stanford University",
    },
    {
      videoId: "mvHXwTa5-DA",
      title: "Jumping robot leaps to record heights",
      authors: ["Matt Johnston", "Brian Hudson", "Jan Sutherland"],
      institution: "University of Cambridge",
    },
    {
      videoId: "_SK4mcTid10",
      title: "Why video calls are bad for brainstorming",
      authors: ["Bernadette MacDonald", "Edward Ross", "Olivia Stewart"],
      institution: "Harvard University",
    },
    {
      videoId: "yjuZEG2vxTw",
      title: "The lifespan secret: why giraffes live longer than ferrets",
      authors: ["Isaac Kelly", "Sarah Davidson", "Una Mills"],
      institution: "California Institute of Technology (Caltech)",
    },
    {
      videoId: "rq0Ex_qCKeQ",
      title: "The AI historian: A new tool to decipher ancient texts",
      authors: ["Zoe Ellison", "Nicholas Mackay", "Heather Parr"],
      institution: "Imperial College London",
    },
    {
      videoId: "_Isvd01XvSs",
      title: "p53: Guardian of the Genome",
      authors: ["Natalie Fisher", "Victoria Dickens", "Wanda Marshall"],
      institution: "ETH Zurich (Swiss Federal Institute of Technology)",
    },
    {
      videoId: "KwyFya_2Lko",
      title: "Searching for supernovas",
      authors: ["Dorothy Howard", "Matt Turner", "Rebecca Kelly"],
      institution: "UCL (University College London)",
    },
    {
      videoId: "I5hfqIfjyx8",
      title: "Why water skitters off sizzling surfaces - and how to stop it",
      authors: ["Joe Powell", "Wendy Alsop", "Bernadette McGrath"],
      institution: "University of Chicago",
    },
  ];
</script>

<Meta
  title="components/sections/TopTenYouTube"
  component={TopTenYouTube}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoData,
  }}
>
  <TopTenYouTube {...args} />
</Story>

<Story
  name="With other YouTube players on page."
  let:args
  args={{
    videoData,
  }}
>
  <div class="stack">
    <LiteYouTube videoId={"kYmLQP2M-qo"} />
    <TopTenYouTube {...args} />
  </div>
</Story>
