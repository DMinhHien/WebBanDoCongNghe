import { Box, Grid, Typography } from "@mui/material";
import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";

const reviews = [
  {
    name: "Samantha87",
    rating: 5,
    date: "20/11/2024 12:34",
    comment:
      "Amazing product! My skin feels so soft and hydrated. Will definitely buy again.",
    reply:
      "Thank you for your kind words! We're so glad the product worked well for you.",
  },
  {
    name: "BeautyLover2024",
    rating: 4,
    date: "19/11/2024 09:22",
    comment: "Great results, but the fragrance is a bit strong for my taste.",
    reply:
      "Thank you for your feedback! We'll consider this for future product updates.",
  },
  {
    name: "SkincareGuru",
    rating: 3,
    date: "18/11/2024 14:10",
    comment:
      "It’s okay, but didn’t work as well as I hoped for my sensitive skin.",
    reply:
      "We're sorry to hear that. Please feel free to contact our support team for personalized advice.",
  },
  {
    name: "JessicaM.",
    rating: 5,
    date: "17/11/2024 11:15",
    comment: "Best cleanser I've ever used! It removes makeup effortlessly.",
    reply:
      "Thank you for the amazing review! We're thrilled to hear you loved it.",
  },
  {
    name: "Alex99",
    rating: 2,
    date: "16/11/2024 18:45",
    comment:
      "Not worth the price. I didn't notice much difference after two weeks.",
    reply:
      "Thank you for your honest review. We value your feedback and will strive to improve.",
  },
  {
    name: "Rachel_B",
    rating: 5,
    date: "15/11/2024 10:30",
    comment:
      "The packaging is so cute, and the product works wonders on my dry skin!",
    reply:
      "Thank you for the lovely review! We're happy you enjoyed both the packaging and the product.",
  },
  {
    name: "JohnDoe21",
    rating: 1,
    date: "14/11/2024 16:10",
    comment: "Gave me a rash after the first use. Definitely not for everyone.",
    reply:
      "We're sorry to hear about your experience. Please contact us for a full refund or exchange.",
  },
  {
    name: "HappyCustomer",
    rating: 4,
    date: "13/11/2024 08:50",
    comment: "Works well, but I wish it came in a larger size for the price.",
    reply:
      "Thank you for the feedback! We'll consider offering larger sizes in the future.",
  },
  {
    name: "EmilyRose",
    rating: 5,
    date: "12/11/2024 20:17",
    comment: "This serum has completely transformed my skin. Highly recommend!",
    reply:
      "Thank you for the glowing review! We're so happy to hear about your transformation.",
  },
  {
    name: "Chris_77",
    rating: 3,
    date: "11/11/2024 15:05",
    comment:
      "Decent moisturizer, but nothing extraordinary compared to cheaper options.",
    reply:
      "Thank you for your feedback. We're always working to ensure our products deliver great value.",
  },
  {
    name: "LindaW",
    rating: 5,
    date: "10/11/2024 19:30",
    comment: "I love the texture and how quickly it absorbs into my skin.",
    reply:
      "Thank you! We're delighted to hear you enjoyed the product's texture and absorption.",
  },
  {
    name: "OliverK",
    rating: 4,
    date: "09/11/2024 14:25",
    comment: "Good product overall, but delivery took too long.",
    reply:
      "Thank you for your review! We're working on improving our delivery times.",
  },
  {
    name: "Sophia_H",
    rating: 2,
    date: "08/11/2024 13:12",
    comment: "Not suitable for oily skin. Made me break out after a few uses.",
    reply:
      "We apologize for your experience. Please reach out to us for assistance.",
  },
  {
    name: "TheMakeupAddict",
    rating: 5,
    date: "07/11/2024 11:00",
    comment: "Perfect for prepping my skin before makeup. Absolutely love it!",
    reply:
      "Thank you for your support! We're glad our product fits well in your routine.",
  },
  {
    name: "Ben_Skincare",
    rating: 3,
    date: "06/11/2024 17:45",
    comment: "It’s okay, but I think it’s overpriced for what it offers.",
    reply:
      "Thank you for your honest feedback. We'll take this into consideration.",
  },
  {
    name: "AvaBeauty",
    rating: 5,
    date: "05/11/2024 09:30",
    comment:
      "The scent is heavenly, and my skin feels amazing after every use.",
    reply:
      "Thank you for the lovely review! We're glad you love the scent and results.",
  },
  {
    name: "Jake88",
    rating: 4,
    date: "04/11/2024 10:05",
    comment: "Very effective, but the bottle runs out quickly.",
    reply:
      "Thank you for your feedback. We're working on offering more product size options.",
  },
  {
    name: "Diana_C",
    rating: 1,
    date: "03/11/2024 16:40",
    comment: "Arrived damaged, and customer service was unhelpful.",
    reply:
      "We're so sorry for this inconvenience. Please contact us for immediate assistance.",
  },
  {
    name: "BeautyPro",
    rating: 5,
    date: "02/11/2024 08:50",
    comment: "I’ve tried so many creams, and this one beats them all. Amazing!",
    reply:
      "Thank you for the glowing review! We're so glad to be your favorite.",
  },
  {
    name: "MichaelBeauty",
    rating: 4,
    date: "01/11/2024 12:20",
    comment:
      "Impressive results, but it’s slightly out of my budget for regular use.",
    reply:
      "Thank you for your feedback. We're always working to balance quality and affordability.",
  },
];

const Reviews = () => {
  return (
    <Box width="90%" margin="0 auto">
      <Typography variant="h3" fontWeight={700} mb={3}>
        Reviews
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ReviewSummary reviews={reviews} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ReviewList reviews={reviews} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;