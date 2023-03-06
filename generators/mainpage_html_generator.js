function createCategoryTitle(name) {
  return `<div class="Layout-sc-1xcs6mc-0 iGmZLW">
            <h2 class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 jKVhlu igzOaC tw-title">
              <span id="bdc1c6b6aa399e8d"
                class="CoreText-sc-1txzju1-0 feJdGm">${name}
              </span>
            </h2>
          </div>`;
}

function createChannelDetailsModal(data) {
  let thumbnailBigger = data.thumbnail_url
    .replace("{width}", "440")
    .replace("{height}", "248");

  const convertedNumberOfViewers =
    (parseInt(data.viewer_count) / 1000).toFixed(1) + "k";

  return `<div style="transition-property: transform, opacity; transition-timing-function: ease;"
            class="ScTransitionBase-sc-hx4quq-0 bUHYlK tw-transition">
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
                            ${data.tags
                              .map(
                                (tag) => `
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
                              )
                              .join("")}
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

                    <div class="ScWrapper-sc-1wvuch4-0 dWBixA tw-hover-accent-effect">
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
                                  <div class="ffz-uptime-element tw-absolute tw-right-0 tw-top-0 tw-mg-1">
                                      <div class="tw-relative ffz-il-tooltip__container">
                                          <div
                                              class="tw-border-radius-small tw-c-background-overlay tw-c-text-overlay tw-flex tw-pd-x-05">
                                              <div class="tw-flex tw-c-text-live">
                                                  <figure class="ffz-i-clock"></figure>
                                              </div>
                                          </div>
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

function renderCategoryChannels(liveChannels) {
  const referenceElement = document.querySelector(
    "#following-page-main-content > div:nth-child(1) > div:nth-child(1)"
  );

  const channels = [
    {
      id: "48087320253",
      user_id: "26301881",
      user_login: "sodapoppin",
      user_name: "sodapoppin",
      game_id: "488190",
      game_name: "Poker",
      type: "live",
      title:
        "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
      viewer_count: 12714,
      started_at: "2023-03-06T18:32:40Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
    },
    {
      id: "48087320253",
      user_id: "26301881",
      user_login: "sodapoppin",
      user_name: "sodapoppin",
      game_id: "488190",
      game_name: "Poker",
      type: "live",
      title:
        "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
      viewer_count: 12714,
      started_at: "2023-03-06T18:32:40Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
    },
    {
      id: "40541694088",
      user_id: "22484632",
      user_login: "forsen",
      user_name: "forsen",
      game_id: "27471",
      game_name: "Minecraft",
      type: "live",
      title: "Tune in to see the next part of my plan!",
      viewer_count: 18278,
      started_at: "2023-03-06T18:01:57Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsen-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/forsen-profile_image-48b43e1e4f54b5c8-300x300.png",
    },
    {
      id: "40541694088",
      user_id: "22484632",
      user_login: "forsen",
      user_name: "forsen",
      game_id: "27471",
      game_name: "Minecraft",
      type: "live",
      title: "Tune in to see the next part of my plan!",
      viewer_count: 18278,
      started_at: "2023-03-06T18:01:57Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsen-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/forsen-profile_image-48b43e1e4f54b5c8-300x300.png",
    },
    {
      id: "40541694088",
      user_id: "22484632",
      user_login: "forsen",
      user_name: "forsen",
      game_id: "27471",
      game_name: "Minecraft",
      type: "live",
      title: "Tune in to see the next part of my plan!",
      viewer_count: 18278,
      started_at: "2023-03-06T18:01:57Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsen-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/forsen-profile_image-48b43e1e4f54b5c8-300x300.png",
    },
    {
      id: "40541694088",
      user_id: "22484632",
      user_login: "forsen",
      user_name: "forsen",
      game_id: "27471",
      game_name: "Minecraft",
      type: "live",
      title: "Tune in to see the next part of my plan!",
      viewer_count: 18278,
      started_at: "2023-03-06T18:01:57Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsen-{width}x{height}.jpg",
      tag_ids: [],
      tags: ["English"],
      is_mature: true,
      profile_image_url:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/forsen-profile_image-48b43e1e4f54b5c8-300x300.png",
    },
  ];

  const htmlToInsert = `
    <div class="Layout-sc-1xcs6mc-0 bZVrjx find-me">
      ${createCategoryTitle("Test Category")}
      <div aria-labelledby="b6eb5fd44b1b1bee">
        <div class="InjectLayout-sc-1i43xsx-0 eptOJT tw-transition-group">
          <div class="ScTower-sc-1sjzzes-0 czzjEE tw-tower">
            ${channels.map((x) => createChannelDetailsModal(x)).join("")}
          </div>
        </div>
          <div>
              <div class="Layout-sc-1xcs6mc-0 fwdLsz show-more__move-up">
                  <div class="Layout-sc-1xcs6mc-0 budyCR">
                      <div class="Layout-sc-1xcs6mc-0 dNDhLW show-more__line"></div>
                  </div>
                  <div class="Layout-sc-1xcs6mc-0 eajNuk"><button
                          class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 ibtYyW jYfhUy">
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
                      </button></div>
                <div class="Layout-sc-1xcs6mc-0 budyCR">
                <div class="Layout-sc-1xcs6mc-0 dNDhLW show-more__line"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>`;
  referenceElement.insertAdjacentHTML("afterend", htmlToInsert);
}
