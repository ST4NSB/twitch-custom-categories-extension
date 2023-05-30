function createCategoryTitle(name) {
  return `<div class="Layout-sc-1xcs6mc-0 mainTitleClass">
            <h2 class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 jKVhlu igzOaC tw-title">
              <span id="bdc1c6b6aa399e8d" class="CoreText-sc-1txzju1-0 feJdGm">${name} channels</span>
            </h2>
            <button id="rename_${name}" title="Edit this category name" class="renameButton icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  fill="white"
                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                </svg>
            </button>
            <button id="movetotop_${name}" title="Move this category to the top" class="moveToTopButton icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  fill="white"
                  d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z" />
                </svg>
            </button>
          </div>`;
}

function createChannelDetailsModal(category, data, hiddenClass) {
  const limitTags = 3;
  let thumbnailBigger = data.thumbnail_url
    .replace("{width}", "440")
    .replace("{height}", "248");

  const convertedNumberOfViewers =
    data.viewer_count >= 1000
      ? (data.viewer_count / 1000).toFixed(1) + "k"
      : data.viewer_count;

  return `<div style="max-width: 20%; transition-property: transform, opacity; transition-timing-function: ease;"
            class="ScTransitionBase-sc-hx4quq-0 bUHYlK tw-transition customTwitchCategoryChannelPanel ${hiddenClass}">
              <div class="shelf-card__impression-wrapper">
                <div data-test-selector="shelf-card-selector" class="Layout-sc-1xcs6mc-0 hFIrVr">
                  <article class="Layout-sc-1xcs6mc-0 guHXLE" data-ffz-type="live">
                    <div class="Layout-sc-1xcs6mc-0 gUnRUD">
                      <div class="Layout-sc-1xcs6mc-0 ilDsKw">
                        <div class="ScTextWrapper-sc-10mto54-1 fwZpSK">
                          <div class="ScTextMargin-sc-10mto54-2 bcdHdk">
                            <a data-focusable="true"
                                data-test-selector="TitleAndChannel"
                                data-a-target="preview-card-channel-link"
                                aria-label="${data.title}"
                                class="ScCoreLink-sc-16kq0mq-0 jKBAWW tw-link" href="/${
                                  data.user_name
                                }">
                                  <div class="Layout-sc-1xcs6mc-0 idlTrs"><button
                                          data-test-selector="StreamTitle"
                                          data-a-target="preview-card-title-link" tabindex="-1"
                                          lines="1"
                                          class="ScCoreLink-sc-16kq0mq-0 fdJOgV Layout-sc-1xcs6mc-0 ScCoreLink-sc-bhsr9c-0 dtGthb jYyMcQ tw-link">
                                          <h3 title="${data.title}"
                                              class="CoreText-sc-1txzju1-0 dlDlel">${
                                                data.title
                                              }</h3>
                                      </button>
                                    </div>
                                <p data-a-target="preview-card-channel-link" tabindex="-1"
                                    title="${
                                      data.user_name
                                    }" class="CoreText-sc-1txzju1-0 jiepBC">
                                    ${data.user_name}
                                </p>
                            </a>
                            <p class="CoreText-sc-1txzju1-0 jiepBC">
                              <a data-test-selector="GameLink"
                                data-a-target="preview-card-game-link"
                                class="ScCoreLink-sc-16kq0mq-0 eYjhIv tw-link"
                                href="/directory/game/${data.game_name}">
                                  ${data.game_name}
                              </a>
                            </p>
                          </div>
                          <div class="Layout-sc-1xcs6mc-0 BcKcx">
                          <div class="InjectLayout-sc-1i43xsx-0 hVPOSx">
                            ${
                              data.tags
                                ? data.tags
                                    .map((tag, index) =>
                                      index < limitTags
                                        ? `
                                  <div class="InjectLayout-sc-1i43xsx-0 koJRns"><a
                                          class="ScTag-sc-14s7ciu-0 bOVWlO tw-tag"
                                          aria-describedby="P9XHUIVkATUExnFgWYbjNpDEumxLEtlJ"
                                          aria-label="Tag, ${tag}" data-a-target="${tag}"
                                          href="/directory/all/tags/${tag}">
                                          <div class="ScTagContent-sc-14s7ciu-1 fUclzK">
                                              <div class="ScTagText-sc-14s7ciu-2 bPzjwR">
                                                  <span>${tag}</span></div>
                                          </div>
                                      </a></div>`
                                        : ""
                                    )
                                    .join("")
                                : ""
                            }
                            </div>
                          </div>
                        </div>
                        <div class="ScImageWrapper-sc-10mto54-0 jrfBpi">
                            <a data-test-selector="preview-card-avatar" tabindex="-1"
                                class="ScCoreLink-sc-16kq0mq-0 jSrrlW tw-link" href="/${
                                  data.user_name
                                }">
                                <div class="ScAspectRatio-sc-18km980-1 gxJZAm tw-aspect">
                                    <div class="ScAspectSpacer-sc-18km980-0 kiiGFY"></div>
                                    <figure aria-label="${data.user_name}"
                                        class="ScAvatar-sc-144b42z-0 jBfrnP tw-avatar"><img
                                            class="InjectLayout-sc-1i43xsx-0 bEwPpb tw-image tw-image-avatar"
                                            alt="${data.user_name}"
                                            src="${data.profile_image_url}">
                                    </figure>
                                </div>
                            </a>
                          </div>
                      </div>
                    </div>

                    <div class="ScWrapper-sc-1wvuch4-0 custom_colors tw-hover-accent-effect">
                      <div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerTop-sc-1wvuch4-2 gEBqEV hPOElK">
                      </div>
                      <div
                          class="ScTransformWrapper-sc-1wvuch4-1 ScCornerBottom-sc-1wvuch4-3 fNwmtl dTxLuP">
                      </div>
                      <div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeLeft-sc-1wvuch4-4 jhgGdR blwnUh">
                      </div>
                      <div
                          class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeBottom-sc-1wvuch4-5 dJYDVl dWkueR">
                      </div>
                      <div class="ScTransformWrapper-sc-1wvuch4-1 gMwbGx"><a
                              data-a-target="preview-card-image-link" tabindex="-1"
                              class="ScCoreLink-sc-16kq0mq-0 jSrrlW preview-card-image-link tw-link"
                              href="/${data.user_name}">
                              <div class="Layout-sc-1xcs6mc-0 hkwQCo">
                                  <div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect">
                                      <div class="ScAspectSpacer-sc-18km980-0 ftHEOL"></div><img
                                          alt="${data.title}" class="tw-image"
                                          src="${thumbnailBigger}">
                                  </div>
                                  <div class="ScPositionCorner-sc-1shjvnv-1 hoKYhE">
                                      <div class="ScChannelStatusTextIndicator-sc-qtgrnb-0 ivjxmt tw-channel-status-text-indicator"
                                          font-size="font-size-6">
                                          <p class="CoreText-sc-1txzju1-0 ecTWUv">LIVE</p>
                                      </div>
                                  </div>
                                  <div class="ScPositionCorner-sc-1shjvnv-1 gUtzBI">
                                      <div
                                          class="ScMediaCardStatWrapper-sc-anph5i-0 bEHknf tw-media-card-stat">
                                          ${convertedNumberOfViewers} viewers
                                      </div>
                                  </div>
                              </div>
                          </a>
                        </div>
                    </div>
                  </article>
                </div>
              </div>
          </div>`;
}

function renderCategoryChannels(category, liveChannels) {
  const referenceElement = document.querySelector(
    "#following-page-main-content > div:nth-child(1) > div:nth-child(1)"
  );

  const htmlToInsert = `
    <div class="customCategoriesLocalize" id="twitchCustomCategoryFromExtension_${category}">
    <div class="Layout-sc-1xcs6mc-0 bZVrjx find-me">
      ${createCategoryTitle(category)}
      <div aria-labelledby="b6eb5fd44b1b1bee">
        <div class="InjectLayout-sc-1i43xsx-0 eptOJT tw-transition-group">
          <div class="ScTower-sc-1sjzzes-0 czzjEE tw-tower">
            ${liveChannels
              .map((x, i) =>
                createChannelDetailsModal(
                  category,
                  x,
                  i >= 5 ? "hiddenChannel" : ""
                )
              )
              .join("")}
          </div>
        </div>
          <div>
              <div class="Layout-sc-1xcs6mc-0 fwdLsz show-more__move-up">
                  <div class="Layout-sc-1xcs6mc-0 budyCR">
                      <div class="Layout-sc-1xcs6mc-0 dNDhLW show-more__line"></div>
                  </div>
                  ${
                    liveChannels.length > 5
                      ? `<div class="Layout-sc-1xcs6mc-0 eajNuk">
                            <button id="showmore_${category}"
                                  class="ScCoreButton-sc-ocjdkq-0 showMoreBttn ScCoreButtonText-sc-ocjdkq-3 ibtYyW jYfhUy">
                                  <div class="ScCoreButtonLabel-sc-s7h2b7-0 kHQqnO">
                                      <div data-a-target="tw-core-button-label-text" class="Layout-sc-1xcs6mc-0 phMMp">
                                          <div class="Layout-sc-1xcs6mc-0 bTJhJp">
                                              <div class="Layout-sc-1xcs6mc-0 byLNWv">
                                                  <p aria-label="Show more" class="CoreText-sc-1txzju1-0">Show more</p>
                                              </div>
                                              <figure class="ScFigure-sc-a7mori-0 gJgjXg tw-svg"><svg width="2rem" height="2rem"
                                                      viewBox="0 0 20 20" fill="currentColor">
                                                      <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
                                                  </svg></figure>
                                          </div>
                                      </div>
                                  </div>
                              </button>
                          </div>`
                      : ""
                  }
                <div class="Layout-sc-1xcs6mc-0 budyCR">
                <div class="Layout-sc-1xcs6mc-0 dNDhLW show-more__line"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </div>`;
  referenceElement.insertAdjacentHTML("afterend", htmlToInsert);
}

// -----------------------------------------------------------------------

function showMoreEvent(e) {
  const buttonRef = e.target.closest("button");
  const category = buttonRef.id.replace("showmore_", "");

  // hide 'Show More' button area
  const showMoreArea = buttonRef.parentNode;
  showMoreArea.classList.add("hiddenArea");

  // show more videos
  const channels = document.querySelectorAll(
    `#twitchCustomCategoryFromExtension_${category} .customTwitchCategoryChannelPanel`
  );

  channels.forEach((elem) => elem.classList.remove("hiddenChannel"));
}

async function renameEvent(e) {
  const buttonRef = e.target.closest("button");
  const oldCategory = buttonRef.id.replace("rename_", "");

  const newCategory = prompt(
    `Type the new name of this category:\n`,
    oldCategory
  ).trim();
  if (!newCategory || newCategory === "") {
    throw new Error("Invalid category name!");
  }

  const categoryAlreadyExists = await doesCategoryExist(newCategory);
  if (categoryAlreadyExists) {
    return alert("This category already exists!");
  }

  const title = buttonRef.parentNode.querySelector("span");
  const titleChannelsDescriptor = title.innerHTML.split(" ").pop();
  title.innerHTML = `${newCategory} ${titleChannelsDescriptor}`;
  buttonRef.id = `rename_${newCategory}`;

  const categoryPanel = document.getElementById(
    `twitchCustomCategoryFromExtension_${oldCategory}`
  );
  categoryPanel.id = `twitchCustomCategoryFromExtension_${newCategory}`;

  const moveToTopButton = document.getElementById(`movetotop_${oldCategory}`);
  moveToTopButton.id = `movetotop_${newCategory}`;

  const showMoreButton = document.getElementById(`showmore_${oldCategory}`);
  if (showMoreButton) {
    showMoreButton.id = `showmore_${newCategory}`;
  }

  await renameCategory(oldCategory, newCategory);
}

async function moveCategoryToTopEvent(e) {
  const buttonRef = e.target.closest("button");
  const category = buttonRef.id.replace("movetotop_", "");

  const liveChannelsPanel = document.querySelector(
    "#following-page-main-content > div > div:nth-child(1)"
  );

  const currCategoryPanel = document.getElementById(
    `twitchCustomCategoryFromExtension_${category}`
  );

  liveChannelsPanel.insertAdjacentElement("afterend", currCategoryPanel);

  await moveCategoryToFront(category);
}
