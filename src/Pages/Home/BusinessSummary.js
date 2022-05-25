import React from 'react';
import footer from '../../assets/images/footer.png'
import { FcBusinessman } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";

const BusinessSummary = () => {
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'

        }}
            class="card bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <h2 class="card-title text-amber-500 text-3xl">MILLION BUSINESS TRUST US</h2>
                <p className='text-xl'>TRY TO UNDERSTAND USER EXPECTATION</p>

                <div class="stats shadow">

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <FcBusinessman></FcBusinessman>
                        </div>
                        <div class="stat-title">Purchase</div>
                        <div class="stat-value">31K+</div>
                        <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <FcDepartment></FcDepartment>
                        </div>
                        <div class="stat-title">Items</div>
                        <div class="stat-value">5K+</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <FcBullish></FcBullish>
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value">200M+</div>

                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <FcRating></FcRating>
                        </div>
                        <div class="stat-title">Review</div>
                        <div class="stat-value">33K+ </div>

                    </div>

                </div>




            </div>
        </div>
    );
};

export default BusinessSummary;