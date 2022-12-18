import { useLocation, useParams } from "react-router-dom";
import Channel from "../../components/Channel";
import { DirectMessagesSearchBar } from "../../components/DirectMessages";
import SvgIcon from "../../components/SvgIcon";
import { useStateValue } from "../../providers/StateProvider";

export default function ConversationList() {
  const { state } = useStateValue();
  const user = state.users[state.user];
  const conversations = user.activeConversations.map(
    (id) => state.conversations[id]
  );
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const params = useParams();
  const conversationId = params.conversationId;
  return (
    <Channel.Left>
      <Channel.LeftHead>
        <DirectMessagesSearchBar>
          Find or start a conversation
        </DirectMessagesSearchBar>
      </Channel.LeftHead>
      <Channel.LeftBody>
        <Channel.LeftGroup>
          <Channel.LeftRow
            url="/channels/@me"
            selected={pathname === "/channels/@me"}
          >
            <SvgIcon>
              <SvgIcon.Group fill="none">
                <SvgIcon.Path
                  className="iconPath"
                  fill={pathname === "/channels/@me" ? "#dcddde" : "#96989D"}
                  d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                  transform="translate(2 4)"
                ></SvgIcon.Path>
                <SvgIcon.Path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></SvgIcon.Path>
              </SvgIcon.Group>
            </SvgIcon>
            Friends
          </Channel.LeftRow>
          <Channel.LeftRow>
            <SvgIcon>
              <SvgIcon.Path
                fill="#5865F2"
                d="M21.554 14.867L21.036 12.936L17.339 13.927L16.001 13.154V10.844L17.338 10.073L21.035 11.062L21.553 9.131L19.787 8.659L21.16 7.865L20.16 6.133L18.788 6.925L19.261 5.16L17.329 4.643L16.339 8.34L15.253 8.966L13.001 7.465V6.414L15.708 3.707L14.294 2.293L13.001 3.586V2H11.001V3.586L9.70802 2.293L8.29402 3.707L11.001 6.414V7.465L8.74802 8.967L7.66302 8.341L6.67302 4.643L4.74102 5.16L5.21502 6.927L3.84102 6.134L2.84102 7.867L4.21402 8.659L2.44802 9.132L2.96602 11.064L6.66302 10.073L8.00102 10.846V13.153L6.66202 13.926L2.96502 12.935L2.44702 14.867L4.21302 15.34L2.84002 16.133L3.84002 17.865L5.21302 17.073L4.74002 18.838L6.67202 19.356L7.66302 15.659L8.74602 15.032L11.001 16.535V17.586L8.29402 20.293L9.70802 21.706L11.001 20.414V22H13.001V20.414L14.294 21.706L15.708 20.293L13.001 17.586V16.535L15.254 15.033L16.339 15.659L17.329 19.356L19.261 18.839L18.788 17.073L20.161 17.867L21.161 16.134L19.787 15.341L21.554 14.867Z"
              ></SvgIcon.Path>
            </SvgIcon>
            Snowsgiving
          </Channel.LeftRow>
          <Channel.LeftRow url="/store" selected={pathname === "/store"}>
            <SvgIcon>
              <SvgIcon.Path
                className="iconPath"
                fill={pathname === "/store" ? "#dcddde" : "#96989D"}
                d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
              ></SvgIcon.Path>
            </SvgIcon>
            Nitro
          </Channel.LeftRow>
        </Channel.LeftGroup>
        <Channel.LeftGroup>
          <Channel.LeftGroupHeader>
            <Channel.LeftGroupHeaderText>
              DIRECT MESSAGES
            </Channel.LeftGroupHeaderText>
            <SvgIcon
              x="0"
              y="0"
              viewBox="0 0 18 18"
              width="16px"
              height="16px"
              fill="#B9BBBE"
            >
              <SvgIcon.Polygon points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8" />
            </SvgIcon>
          </Channel.LeftGroupHeader>
          {conversations.map((conversation) => {
            const friendId = conversation.users.find((id) => id !== state.user);
            const friend = state.users[friendId];
            return (
              <Channel.LeftRow
                url={`/channels/@me/${conversation.id}`}
                selected={conversation.id === conversationId}
              >
                <Channel.FriendIconWrapper>
                  <SvgIcon width="40px" height="40px" viewBox="0 0 40 40">
                    <mask id="avatarMask">
                      <rect
                        fill="black"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                      />
                      <circle cx="16" cy="16" r="16" fill="white" />
                      <circle cx="27" cy="27" r="8" fill="black" />
                    </mask>
                    <mask id="userStatusMaskOnline">
                      <rect width="10" height="10" x="22" y="22" fill="black" />
                      <circle cx="27" cy="27" r="5" fill="white" />
                    </mask>
                    <mask id="userStatusMaskAFK">
                      <rect width="10" height="10" x="22" y="22" fill="black" />
                      <circle cx="27" cy="27" r="5" fill="white" />
                      <circle cx="24" cy="24" r="4" fill="black" />
                    </mask>
                    <mask id="userStatusMaskOffline">
                      <rect width="10" height="10" x="22" y="22" fill="black" />
                      <circle cx="27" cy="27" r="5" fill="white" />
                      <circle cx="27" cy="27" r="3" fill="black" />
                    </mask>
                    <mask id="userStatusMaskDND">
                      <rect width="10" height="10" x="22" y="22" fill="black" />
                      <circle cx="27" cy="27" r="5" fill="white" />
                      <rect
                        x="23.5"
                        y="25.5"
                        width="7"
                        height="3"
                        fill="black"
                      />
                    </mask>
                    <SvgIcon.ForeignObject
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                      mask="url(#avatarMask)"
                    >
                      <div>
                        <img
                          src="/assets/default_avatar.png"
                          alt=" "
                          aria-hidden="true"
                        />
                      </div>
                    </SvgIcon.ForeignObject>
                    <SvgIcon.Rect
                      width="10"
                      height="10"
                      x="22"
                      y="22"
                      fill={
                        friend.status === "AFK"
                          ? "#faa61a"
                          : friend.status === "Offline"
                          ? "#747f8d"
                          : friend.status === "DND"
                          ? "#ED4245"
                          : "#3ba55c"
                      }
                      mask={`url(#userStatusMask${friend.status})`}
                    ></SvgIcon.Rect>
                  </SvgIcon>
                </Channel.FriendIconWrapper>
                {friend.name}
              </Channel.LeftRow>
            );
          })}
          <Channel.LeftRow disabled={true}></Channel.LeftRow>
        </Channel.LeftGroup>
      </Channel.LeftBody>
      <Channel.LeftFooter>Footer</Channel.LeftFooter>
    </Channel.Left>
  );
}
