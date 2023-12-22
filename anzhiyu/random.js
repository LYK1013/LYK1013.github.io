var posts=["2018/05/02/PC局域网搭建可道云/","2022/07/01/UE虚拟制片/","2016/09/02/Windows server WDS部署服务/","2021/12/08/“五个一百”网络精品年度发布盛典/","2023/07/20/使用Colab挂Sheepit积分/","2022/03/04/北京2022年冬残奥会/","2023/03/06/卖奶茶的小女孩/","2022/05/07/安徽省运动会/","2022/01/24/博爱助学金项目/","2022/05/07/大庆旅游发展大会/","2022/05/07/抖音直播视频截取/","2023/03/20/数据恢复/","2022/05/07/米兰大教堂MR-无界/","2022/08/30/梵VANLOUNGE品牌设计/","2021/01/07/腾讯新闻外宣规范/","2022/05/07/过年啦-冬奥一起玩/","2022/05/07/茅台茅韵宣传片/","2022/05/07/阿云嘎-心岛/","2023/03/06/黑群晖无损降级/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"zhiyb","hundredSuffix":"","link":"http://zhiyb.github.io/#","avatar":"https://avatars.githubusercontent.com/u/5932502?v=4","descr":"三星芯片设计师","siteshot":null},{"name":"张洪Heo","hundredSuffix":"","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":null},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"https://xiaoztx.top/xiaozhi-blog-static/img/xiaoztx-web.png","descr":"生生不息，好运不止"},{"name":"张子涵的博客","link":"https://zhangzihan0.github.io/","avatar":"https://img1.imgtp.com/2023/07/28/etAVitCP.jpg","descr":"今下把酒同一醉，明日即是天涯人。","siteshot":"https://img1.imgtp.com/2023/07/28/98qOtZUQ.png"},{"name":"葱苓","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","rss":"/atom.xml"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };