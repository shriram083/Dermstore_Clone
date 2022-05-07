let navbar = () => {
    return `   <!-- Header -->
      <div id="header">
        <div id="HOne"></div>
        <div id="HTwo">
          <div id="HTwoTop">
            <img src="./Images/dermstore.png" alt="" />
            <div id="outsideInputDiv">
              <div id="inputDiv">
                <input type="text" placeholder="Search for a product or brand" />
                <span class="material-symbols-rounded"> search </span>
              </div>
            </div>
            <!-- account -->
            <div class="account">
              <span class="material-symbols-rounded">
                person
              </span>
              <p style="margin-left: 5px;">Account</p>
            </div>
            <div class="contain">
              <div class="containerTop">
                <div class="insideContainer login">
                  <p>LOGIN</p>
                </div>
                <div class="insideContainer register">
                  <p>REGISTER</p>
                </div>
              </div>
              <div class="insideContainer accountDropDown">
                <p>My Favorites</p>
              </div>
              <div class="insideContainer">
                <p>Your Subscriptions</p>
              </div>
              <div class="insideContainer">
                <p>Your Referrals</p>
              </div>
            </div>
              <!-- cart -->
              <div id="cart">
                <div id="insideCart">
                  <span class="material-symbols-rounded"> shopping_bag </span>
                  <p>Cart</p>
                </div>
              </div>
            </div>
            <div id="HTwoBottom">
              <div class="categorys"><p>Brands</p></div>
              <div class="categorys"><p>Browser By</p></div>
              <div class="categorys"><p>Bestsellers</p></div>
              <div class="categorys"><p>Skin Care</p></div>
              <div class="categorys"><p>Makeup</p></div>
              <div class="categorys"><p>Hair Care</p></div>
              <div class="categorys"><p>Bath & Body</p></div>
              <div class="categorys"><p>Tools & Devices</p></div>
              <div class="categorys"><p>Gifts & Sets</p></div>
              <div class="categorys"><p>BeautyFIX</p></div>
              <div class="categorys"><p>Sale</p></div>
              <div class="categorys"><p>New</p></div>
              <div class="categorys"><p>Skin 101</p></div>
            </div>
          </div>
          <div id="HThree">
            <div id="HTThreeContainer">
              <div class="HThree">
                <span class="material-symbols-outlined"> local_shipping </span>
                <p>FREE US shipping over $50</p>
              </div>
              <div class="HThree">
                <!-- <i class="fa-solid fa-tablets"></i> -->
                <span class="material-symbols-outlined"> autorenew </span>
                <p>New customers save 15% with code WELCOME15</p>
              </div>
              <div class="HThree">
                <span class="material-symbols-outlined"> task </span>
                <p>Redeem Dermstore Rewards</p>
              </div>
              <div class="HThree">
                <span class="material-symbols-outlined"> check </span>
                <p>Pay in 4 with Sezzle</p>
              </div>
            </div>
          </div>
        </div>
        <div id="HFour">
          <p>
            15% off SkinMedica+extra 20% off auto-replenishment. Receiveafree gift
            when you spend $160+ on the brand. SHOP NOW
          </p>
        </div>`;
  };
  
  export { navbar };
  