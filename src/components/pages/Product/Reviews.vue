<template>
    <div class="reviews">
        <div class="reviews__item" v-for="review in reviewsArr" :key="review.id">
            <div class="reviews__top">
                <div class="reviews__name">
                    {{ review.userName }}
                </div>
                <div class="reviews__stars">
                    <span v-for="n in 5" :key="n">
                        <img v-if="n <= review.rating" src="@/assets/star.svg" alt="">
                        <img v-else src="@/assets/star-stroke.svg" alt="">
                    </span>
                </div>
            </div>
            <p>
                {{ review.text }}
            </p>
        </div>
        <form @submit.prevent="handleSubmit" class="reviews__item">
            <div class="reviews__name">
                Leave your review
            </div>
            <input v-model="newReview.userName" type="text" placeholder="Your name" required />
            <textarea v-model="newReview.text" placeholder="Your review" required></textarea>
            <div class="reviews__rating">
                <p>Rating</p>
                <div class="reviews__userstars">
                    <input type="radio" id="review-star5" value="5" v-model="newReview.rating" name="reviews-stars" required />
                    <label for="review-star5">
                        <img src="@/assets/star.svg" alt="" />
                        <img src="@/assets/star-stroke.svg" alt="" />
                    </label>
                    <input type="radio" id="review-star4" value="4" v-model="newReview.rating" name="reviews-stars" required />
                    <label for="review-star4">
                        <img src="@/assets/star.svg" alt="" />
                        <img src="@/assets/star-stroke.svg" alt="" />
                    </label>
                    <input type="radio" id="review-star3" value="3" v-model="newReview.rating" name="reviews-stars" required />
                    <label for="review-star3">
                        <img src="@/assets/star.svg" alt="" />
                        <img src="@/assets/star-stroke.svg" alt="" />
                    </label>
                    <input type="radio" id="review-star2" value="2" v-model="newReview.rating" name="reviews-stars" required />
                    <label for="review-star2">
                        <img src="@/assets/star.svg" alt="" />
                        <img src="@/assets/star-stroke.svg" alt="" />
                    </label>
                    <input type="radio" id="review-star1" value="1" v-model="newReview.rating" name="reviews-stars" required />
                    <label for="review-star1">
                        <img src="@/assets/star.svg" alt="" />
                        <img src="@/assets/star-stroke.svg" alt="" />
                    </label>
                </div>
            </div>
            <button type="submit">Publish Review</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import ReviewsMixin from "@/mixins/reviews/reviews";
import { IReview } from "@/mixins/reviews/index";

@Component
export default class Reviews extends Mixins(ReviewsMixin) {
    @Prop() reviewsIds!: string[];
    reviewsArr: IReview[] = [];
    newReview: IReview = {
        userName: "",
        text: "",
        rating: 0,
        id: "", 
    };

    created() {
        this.reviews.forEach((review) => {
            if (this.reviewsIds.includes(review.id)) {
                this.reviewsArr.push(review);
            }
        });
    }

    handleSubmit() {
        const newId = `${Date.now()}`;
        const reviewToAdd = {
            ...this.newReview,
            id: newId,
        };
        this.reviewsArr.push(reviewToAdd);
        this.newReview = {
            userName: "",
            text: "",
            rating: 0,
            id: "",
        };
    }
}
</script>


<style lang="sass" scoped>
@import '@/style/pages/product/reviews.sass'
</style>