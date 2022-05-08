let navbar = () => {
  return `   <!-- Header -->
      <div id="header">
        <div id="HOne"></div>
        <div id="HTwo">
          <div id="HTwoTop">
            <img src="./Images/dermstore.png" alt="" class="logo"/>
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
              <div class="categorys brands"><p>Brands</p></div>
              <!-- brand drop down start -->
              <div class="brandCon">
                <div id="insideBrand">
                  <hr>
                  <div id="brandTop">
                    <div><p class="brandP">0-9</p></div>
                    <div><p class="brandP">A</p></div>
                    <div><p class="brandP">B</p></div>
                    <div><p class="brandP">C</p></div>
                    <div><p class="brandP">D</p></div>
                    <div><p class="brandP">E</p></div>
                    <div><p class="brandP">F</p></div>
                    <div><p class="brandP">G</p></div>
                    <div><p class="brandP">H</p></div>
                    <div><p class="brandP">I</p></div>
                    <div><p class="brandP">J</p></div>
                    <div><p class="brandP">K</p></div>
                    <div><p class="brandP">L</p></div>
                    <div><p class="brandP">M</p></div>
                    <div><p class="brandP">N</p></div>
                    <div><p class="brandP">O</p></div>
                    <div><p class="brandP">P</p></div>
                    <div><p class="brandP">Q</p></div>
                    <div><p class="brandP">R</p></div>
                    <div><p class="brandP">S</p></div>
                    <div><p class="brandP">T</p></div>
                    <div><p class="brandP">U</p></div>
                    <div><p class="brandP">V</p></div>
                    <div><p class="brandP">W</p></div>
                    <div><p class="brandP">X</p></div>
                    <div><p class="brandP">Y</p></div>
                    <div><p class="brandP">Z</p></div>
                  </div>
                  <hr>
                  <div id="brandBottom">
                    <div class="insideBrandBottom"><p>100% Pure</p></div>
                    <div class="insideBrandBottom"><p>111SKIN</p></div>
                    <div class="insideBrandBottom"><p>3LAB</p></div>
                  </div>
                </div>
              </div>
              <!-- brand drop down end-->
              <div class="categorys browser"><p>Browser By</p></div>
              <!-- browser drop down start -->
              <div class="browserCon">
                <div id="insideBrowser">
                  <div id="BrowserDivOne" class="browserDiv">
                    <hr />
                    <p class="heading browserP">Brands</p>
                    <p class="browserP">SkinCeuticals</p>
                    <p class="browserP">EltaMD</p>
                    <p class="browserP">SkinMedica</p>
                    <p class="browserP">Obagi</p>
                    <p class="browserP">iS Clinical</p>
                    <p class="browserP">Eminence Organic Skin</p>
                    <p class="browserP">Revision Skincare</p>
                    <p class="browserP">Neocutis</p>
                    <p class="browserP">Oribe</p>
                    <p class="browserP">Sunday Riley</p>
                    <p class="browserP">PCA SKIN</p>
                  </div>
                  <div id="BrowserDivTwo" class="browserDiv">
                    <hr />
                    <p class="heading browserP">Concern</p>
                    <p class="browserP">Acne</p>
                    <p class="browserP">Acne Scars</p>
                    <p class="browserP">Aging Skin</p>
                    <p class="browserP">Blackheads</p>
                    <p class="browserP">Dark Circles</p>
                    <p class="browserP">Dark Spots</p>
                    <p class="browserP">Rosacea</p>
                    <p class="browserP">Oil Control</p>
                    <p class="browserP">Irritated Skin</p>
                    <p class="browserP">Large Pores</p>
                    <p class="browserP">Stretch Marks</p>
                    <p class="browserP">Wrinkles</p>
                  </div>
                  <div id="BrowserDivThree" class="browserDiv">
                    <hr />
                    <p class="heading browserP">Skin Type</p>
                    <p class="browserP">Acne-Prone Skin</p>
                    <p class="browserP">Sensitive Skin</p>
                    <p class="browserP">Dry Skin</p>
                    <p class="browserP">Mature Skin</p>
                    <p class="browserP">Combination Skin</p>
                    <p class="browserP">Oily Skin</p>
                    <p class="browserP">Normal Skin</p>
                  </div>
                  <div id="BrowserDivFour" class="browserDiv">
                    <hr />
                    <p class="heading browserP">Ingredient</p>
                    <p class="browserP">Vitamin C</p>
                    <p class="browserP">Hyaluronic Acid</p>
                    <p class="browserP">Retinol</p>
                    <p class="browserP">Antioxidants</p>
                    <p class="browserP">Zinc Oxide</p>
                    <p class="browserP">Niacinamide</p>
                    <p class="browserP">Peptides</p>
                    <p class="browserP">Glycolic Acid</p>
                    <p class="browserP">Vitamin A</p>
                    <p class="browserP">Vitamin E</p>
                    <p class="browserP">Latic Acid</p>
                  </div>
                  <div id="BrowserDivFive" class="browserDiv">
                    <hr />
                    <p class="heading browserP">New Featured Brands</p>
                    <p class="browserP">Sulwhasoo</p>
                    <p class="browserP">Me</p>
                    <p class="browserP">Iluminage</p>
                    <p class="browserP">ghd</p>
                    <p class="browserP">Medik8</p>
                    <p class="browserP">Volition Beauty</p>
                    <p class="browserP">Nurse Jamie</p>
                    <p class="browserP">NION Beauty</p>
                    <p class="browserP">AMELIRATE</p>
                    <p class="browserP">Olaplex</p>
                    <p class="browserP">ILIA</p>
                    <p class="browserP">Revision Skincare</p>
                    <p class="browserP lastP">SENTE</p>
                  </div>
                  <div id="BrowserDivSix" class="browserDiv">
                    <hr />
                    <p class="heading browserP">Collection</p>
                    <p class="browserP">Allure Award Winners</p>
                    <p class="browserP">Consicous Beauty</p>
                    <p class="browserP">Dermatologist Approved</p>
                    <p class="browserP">Dermstore Exclusive</p>
                    <p class="browserP">Female-Founded Brands</p>
                    <p class="browserP">Gift With Purchase</p>
                    <p class="browserP">Save With Replenishment</p>
                    <p class="browserP">Spring Skin Care</p>
                    <p class="browserP">Wellness</p>
                  </div>
                </div>
              </div>
              <!-- browser drop down end-->
              <div class="categorys best"><p>Bestsellers</p></div>
              <div class="categorys skinCare"><p>Skin Care</p></div>
              <div class="categorys makeup"><p>Makeup</p></div>
              <!-- makeup drop down start -->
              <div class="makeupCon">
                <div id="insideMakeup">
                  <div id="makeupDivOne" class="makeupDiv">
                    <hr />
                    <p class="heading makeupP">Face</p>
                    <p class="makeupP">Foundation</p>
                    <p class="makeupP">BB & CC Creams</p>
                    <p class="makeupP">Concealer</p>
                    <p class="makeupP">Blush</p>
                    <p class="makeupP">Highlighters & Contouring</p>
                    <p class="makeupP">Primer</p>
                    <p class="makeupP">Face Palettes</p>
                    <p class="makeupP lastP">Setting Spray & Powders</p>
                  </div>
                  <div id="makeupDivTwo" class="makeupDiv">
                    <hr />
                    <p class="heading makeupP">Lips</p>
                    <p class="makeupP">Lipstick</p>
                    <p class="makeupP">Liquid Lipstick</p>
                    <p class="makeupP">Lip Gloss & Stains</p>
                    <p class="makeupP">Lip Balms & Treatments</p>
                  </div>
                  <div id="makeupDivThree" class="makeupDiv">
                    <hr />
                    <p class="heading makeupP">Eyes</p>
                    <p class="makeupP">Eyeshadow</p>
                    <p class="makeupP">Eye Palettes</p>
                    <p class="makeupP">Mascara</p>
                    <p class="makeupP">Eyeliner</p>
                    <p class="makeupP">Eyebrow Makeup</p>
                    <p class="makeupP">lash & Brow Enhancer</p>
                    <p class="makeupP">Eye Primer</p>
                    <p class="makeupP">False Lashes</p>
                  </div>
                  <div id="makeupDivFour" class="makeupDiv">
                    <hr />
                    <p class="heading makeupP">More</p>
                    <p class="makeupP">Tools & Brushes</p>
                    <p class="makeupP">Makeup Meets Skin Care</p>
                    <p class="makeupP">New Arrivals</p>
                    <p class="makeupP">Bestsellers</p>
                    <p class="makeupP">Kits & Sets</p>
                    <p class="makeupP">Top Rated</p>
                    <p class="makeupP">Sale</p>
                    <p class="makeupP">View All</p>
                  </div>
                  <div id="makeupDivFive" class="makeupDiv">
                    <hr />
                    <p class="heading makeupP">Popular Brands</p>
                    <p class="makeupP">RevitaLash Cosmetics</p>
                    <p class="makeupP">jane iredale</p>
                    <p class="makeupP">Smashbox</p>
                    <p class="makeupP">ILIA</p>
                    <p class="makeupP">Tarte Cosmetics</p>
                    <p class="makeupP">Glo Skin Beauty</p>
                    <p class="makeupP">Kevyn Aucoin</p>
                    <p class="makeupP">BY TERRY</p>
                  </div>
                </div>
              </div>
              <!-- makeup drop down end-->
              <div class="categorys hari"><p>Hair Care</p></div>
              <div class="categorys bath"><p>Bath & Body</p></div>
              <div class="categorys tool"><p>Tools & Devices</p></div>
              <div class="categorys gifts"><p>Gifts & Sets</p></div>
              <div class="categorys beauty"><p>BeautyFIX</p></div>
              <div class="categorys sale"><p>Sale</p></div>
              <div class="categorys new"><p>New</p></div>
              <div class="categorys skin"><p>Skin 101</p></div>
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
