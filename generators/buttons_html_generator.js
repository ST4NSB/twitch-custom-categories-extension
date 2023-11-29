const navBarSelector = ".top-nav__menu > div:last-of-type";

// -------------------------------------------------------

function renderAddCategoryButton() {
  const element = document.querySelector(navBarSelector);
  element.insertAdjacentHTML(
    "afterbegin",
    `<div id="addCustomCategory" title="Add a custom category">
        ${renderNavButton(` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            fill="white"
            d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
        </svg>`)}
    </div>`
  );
}

function renderDeleteCategoryButton() {
  const element = document.querySelector(navBarSelector);
  element.insertAdjacentHTML(
    "afterbegin",
    `<div id="deleteCustomCategory" title="Delete a custom category">
        ${renderNavButton(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            fill="white"
            d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z" />
        </svg>`)}
    </div>`
  );
}

function renderAddChannelToCategoryButton() {
  const element = document.querySelector(navBarSelector);
  element.insertAdjacentHTML(
    "afterbegin",
    `<div id="addChannelToCategory" title="Add this channel to a category">
        ${renderNavButton(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            fill="white"
            d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>`)}
    </div>`
  );
}

function renderDeleteChannelFromCategoryButton() {
  const element = document.querySelector(navBarSelector);
  element.insertAdjacentHTML(
    "afterbegin",
    `<div id="deleteChannelFromCategory" title="Delete this channel from a category">
        ${renderNavButton(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            fill="white"
            d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
        </svg>`)}
    </div>`
  );
}

function renderDebugButton() {
  const element = document.querySelector(navBarSelector);
  element.insertAdjacentHTML(
    "afterbegin",
    `<div id="debugButton" title="Show all active channels from each category">
        ${renderNavButton(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path fill="white"
            d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" />
        </svg>`)}
    </div>`
  );
}

// -------------------------------------------------------

function renderNavButton(iconTag) {
  return `
        <div class="Layout-sc-1xcs6mc-0 hjmDKV bFqPcI tooltip">
            <div class="Layout-sc-1xcs6mc-0 onsite-notifications">
                <div class="Layout-sc-1xcs6mc-0 hIWHob kUsXNG onsite-notifications-toast-manager"
                    data-test-selector="onsite-notifications-toast-manager">
                </div>
                <div class="Layout-sc-1xcs6mc-0 bZVrjx gyuRLA">
                    <div class="Layout-sc-1xcs6mc-0 crbrgc dhzqLB">
                        <div style="display: inherit;" data-test-selector="toggle-balloon-wrapper__mouse-enter-detector">
                            <div class="InjectLayout-sc-1i43xsx-0 dVOhMf jYKWrK">
                                <button class="ScCoreButton-sc-ocjdkq-0 hZACqf ibtYyW ScButtonIcon-sc-9yap0r-0 iqxxop cClrQk"
                                    aria-label="Open Notifications" aria-describedby="71pItpr26nPuC7mqdyBUN61xDZtH2sDj">
                                    <div class="ButtonIconFigure-sc-1emm8lf-0 bxQRSJ eWjnEp">
                                        <div class="ScIconLayout-sc-1q25cff-0 cMWGQu">
                                            <div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect">
                                                <div class="ScAspectSpacer-sc-18km980-0 kiiGFY">
                                                </div>
                                                ${iconTag}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
