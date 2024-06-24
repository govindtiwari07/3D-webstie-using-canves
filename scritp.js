function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     black_images/0001.png
     black_images/0002.png
     black_images/0003.png
     black_images/0004.png
     black_images/0005.png
     black_images/0006.png
     black_images/0007.png
     black_images/0008.png
     black_images/0009.png
     black_images/0010.png
     black_images/0011.png
     black_images/0012.png
     black_images/0013.png
     black_images/0014.png
     black_images/0015.png
     black_images/0016.png
     black_images/0017.png
     black_images/0018.png
     black_images/0019.png
     black_images/0020.png
     black_images/0021.png
     black_images/0022.png
     black_images/0023.png
     black_images/0024.png
     black_images/0025.png
     black_images/0026.png
     black_images/0027.png
     black_images/0028.png
     black_images/0029.png
     black_images/0030.png
     black_images/0031.png
     black_images/0032.png
     black_images/0033.png
     black_images/0034.png
     black_images/0035.png
     black_images/0036.png
     black_images/0037.png
     black_images/0038.png
     black_images/0039.png
     black_images/0040.png
     black_images/0041.png
     black_images/0042.png
     black_images/0043.png
     black_images/0044.png
     black_images/0045.png
     black_images/0046.png
     black_images/0047.png
     black_images/0048.png
     black_images/0049.png
     black_images/0050.png
     black_images/0051.png
     black_images/0052.png
     black_images/0053.png
     black_images/0054.png
     black_images/0055.png
     black_images/0056.png
     black_images/0057.png
     black_images/0058.png
     black_images/0059.png
     black_images/0060.png
     black_images/0061.png
     black_images/0062.png
     black_images/0063.png
     black_images/0064.png
     black_images/0065.png
     black_images/0066.png
     black_images/0067.png
     black_images/0068.png
     black_images/0069.png
     black_images/0070.png
     black_images/0071.png
     black_images/0072.png
     black_images/0073.png
     black_images/0074.png
     black_images/0075.png
     black_images/0076.png
     black_images/0077.png
     black_images/0078.png
     black_images/0079.png
     black_images/0080.png
     black_images/0081.png
     black_images/0082.png
     black_images/0083.png
     black_images/0084.png
     black_images/0085.png
     black_images/0086.png
     black_images/0087.png
     black_images/0088.png
     black_images/0089.png
     black_images/0090.png
     black_images/0091.png
     black_images/0092.png
     black_images/0093.png
     black_images/0094.png
     black_images/0095.png
     black_images/0096.png
     black_images/0097.png
     black_images/0098.png
     black_images/0099.png
     black_images/0100.png
     black_images/0101.png
     black_images/0102.png
     black_images/0103.png
     black_images/0104.png
     black_images/0105.png
     black_images/0106.png
     black_images/0107.png
     black_images/0108.png
     black_images/0109.png
     black_images/0110.png
     black_images/0111.png
     black_images/0112.png
     black_images/0113.png
     black_images/0114.png
     black_images/0115.png
     black_images/0116.png
     black_images/0117.png
     black_images/0118.png
     black_images/0119.png
     black_images/0120.png
     black_images/0121.png
     black_images/0122.png
     black_images/0123.png
     black_images/0124.png
     black_images/0125.png
     black_images/0126.png
     black_images/0127.png
     black_images/0128.png
     black_images/0129.png
     black_images/0130.png
     black_images/0131.png
     black_images/0132.png
     black_images/0133.png
     black_images/0134.png
     black_images/0135.png
     black_images/0136.png
     black_images/0137.png
     black_images/0138.png
     black_images/0139.png
     black_images/0140.png
     black_images/0141.png
     black_images/0142.png
     black_images/0143.png
     black_images/0144.png
     black_images/0145.png
     black_images/0146.png
     black_images/0147.png
     black_images/0148.png
     black_images/0149.png
     black_images/0150.png
     black_images/0151.png
     black_images/0152.png
     black_images/0153.png
     black_images/0154.png
     black_images/0155.png
     black_images/0156.png
     black_images/0157.png
     black_images/0158.png
     black_images/0159.png
     black_images/0160.png
     black_images/0161.png
     black_images/0162.png
     black_images/0163.png
     black_images/0164.png
     black_images/0165.png
     black_images/0166.png
     black_images/0167.png
     black_images/0168.png
     black_images/0169.png
     black_images/0170.png
     black_images/0171.png
     black_images/0172.png
     black_images/0173.png
     black_images/0174.png
     black_images/0175.png
     black_images/0176.png
     black_images/0177.png
     black_images/0178.png
     black_images/0179.png
     black_images/0180.png
     black_images/0181.png
     black_images/0182.png
     black_images/0183.png
     black_images/0184.png
     black_images/0185.png
     black_images/0186.png
     black_images/0187.png
     black_images/0188.png
     black_images/0189.png
     black_images/0190.png
     black_images/0191.png
     black_images/0192.png
     black_images/0193.png
     black_images/0194.png
     black_images/0195.png
     black_images/0196.png
     black_images/0197.png
     black_images/0198.png
     black_images/0199.png
     black_images/0200.png
     black_images/0201.png
     black_images/0202.png
     black_images/0203.png
     black_images/0204.png
     black_images/0205.png
     black_images/0206.png
     black_images/0207.png
     black_images/0208.png
     black_images/0209.png
     black_images/0210.png
     black_images/0211.png
     black_images/0212.png
     black_images/0213.png
     black_images/0214.png
     black_images/0215.png
     black_images/0216.png
     black_images/0217.png
     black_images/0218.png
     black_images/0219.png
     black_images/0220.png
     black_images/0221.png
     black_images/0222.png
     black_images/0223.png
     black_images/0224.png
     black_images/0225.png
     black_images/0226.png
     black_images/0227.png
     black_images/0228.png
     black_images/0229.png
     black_images/0230.png
     black_images/0231.png
     black_images/0232.png
     black_images/0233.png
     black_images/0234.png
     black_images/0235.png
     black_images/0236.png
     black_images/0237.png
     black_images/0238.png
     black_images/0239.png
     black_images/0240.png
     black_images/0241.png
     black_images/0242.png
     black_images/0243.png
     black_images/0244.png
     black_images/0245.png
     black_images/0246.png
     black_images/0247.png
     black_images/0248.png
     black_images/0249.png
     black_images/0250.png
     black_images/0251.png
     black_images/0252.png
     black_images/0253.png
     black_images/0254.png
     black_images/0255.png
     black_images/0256.png
     black_images/0257.png
     black_images/0258.png
     black_images/0259.png
     black_images/0260.png
     black_images/0261.png
     black_images/0262.png
     black_images/0263.png
     black_images/0264.png
     black_images/0265.png
     black_images/0266.png
     black_images/0267.png
     black_images/0268.png
     black_images/0269.png
     black_images/0270.png
     black_images/0271.png
     black_images/0272.png
     black_images/0273.png
     black_images/0274.png
     black_images/0275.png
     black_images/0276.png
     black_images/0277.png
     black_images/0278.png
     black_images/0279.png
     black_images/0280.png
     black_images/0281.png
     black_images/0282.png
     black_images/0283.png
     black_images/0284.png
     black_images/0285.png
     black_images/0286.png
     black_images/0287.png
     black_images/0288.png
     black_images/0289.png
     black_images/0290.png
     black_images/0291.png
     black_images/0292.png
     black_images/0293.png
     black_images/0294.png
     black_images/0295.png
     black_images/0296.png
     black_images/0297.png
     black_images/0298.png
     black_images/0299.png
     black_images/0300.png
     black_images/0301.png
     black_images/0302.png
     black_images/0303.png
     black_images/0304.png
     black_images/0305.png
     black_images/0306.png
     black_images/0307.png
     black_images/0308.png
     black_images/0309.png
     black_images/0310.png
     black_images/0311.png
     black_images/0312.png
     black_images/0313.png
     black_images/0314.png
     black_images/0315.png
     black_images/0316.png
     black_images/0317.png
     black_images/0318.png
     black_images/0319.png
     black_images/0320.png
     black_images/0321.png
     black_images/0322.png
     black_images/0323.png
     black_images/0324.png
     black_images/0325.png
     black_images/0326.png
     black_images/0327.png
     black_images/0328.png
     black_images/0329.png
     black_images/0330.png
     black_images/0331.png
     black_images/0332.png
     black_images/0333.png
     black_images/0334.png
     black_images/0335.png
     black_images/0336.png
     black_images/0337.png
     black_images/0338.png
     black_images/0339.png
     black_images/0340.png
     black_images/0341.png
     black_images/0342.png
     black_images/0343.png
     black_images/0344.png
     black_images/0345.png
     black_images/0346.png
     black_images/0347.png
     black_images/0348.png
     black_images/0349.png
     black_images/0350.png
     black_images/0351.png
     black_images/0352.png
     black_images/0353.png
     black_images/0354.png
     black_images/0355.png
     black_images/0356.png
     black_images/0357.png
     black_images/0358.png
     black_images/0359.png
     black_images/0360.png
     black_images/0361.png
     black_images/0362.png
     black_images/0363.png
     black_images/0364.png
     black_images/0365.png
     black_images/0366.png
     black_images/0367.png
     black_images/0368.png
     black_images/0369.png
     black_images/0370.png
     black_images/0371.png
     black_images/0372.png
     black_images/0373.png
     black_images/0374.png
     black_images/0375.png
     black_images/0376.png
     black_images/0377.png
     black_images/0378.png
     black_images/0379.png
     black_images/0380.png
     black_images/0381.png
     black_images/0382.png
     black_images/0383.png
     black_images/0384.png
     black_images/0385.png
     black_images/0386.png
     black_images/0387.png
     black_images/0388.png
     black_images/0389.png
     black_images/0390.png
     black_images/0391.png
     black_images/0392.png
     black_images/0393.png
     black_images/0394.png
     black_images/0395.png
     black_images/0396.png
     black_images/0397.png
     black_images/0398.png
     black_images/0399.png
     black_images/0400.png
     black_images/0401.png
     black_images/0402.png
     black_images/0403.png
     black_images/0404.png
     black_images/0405.png
     black_images/0406.png
     black_images/0407.png
     black_images/0408.png
     black_images/0409.png
     black_images/0410.png
     black_images/0411.png
     black_images/0412.png
     black_images/0413.png
     black_images/0414.png
     black_images/0415.png
     black_images/0416.png
     black_images/0417.png
     black_images/0418.png
     black_images/0419.png
     black_images/0420.png
     black_images/0421.png
     black_images/0422.png
     black_images/0423.png
     black_images/0424.png
     black_images/0425.png
     black_images/0426.png
     black_images/0427.png
     black_images/0428.png
     black_images/0429.png
     black_images/0430.png
     black_images/0431.png
     black_images/0432.png
     black_images/0433.png
     black_images/0434.png
     black_images/0435.png
     black_images/0436.png
     black_images/0437.png
     black_images/0438.png
     black_images/0439.png
     black_images/0440.png
     black_images/0441.png
     black_images/0442.png
     black_images/0443.png
     black_images/0444.png
     black_images/0445.png
     black_images/0446.png
     black_images/0447.png
     black_images/0448.png
     black_images/0449.png
     black_images/0450.png
     black_images/0451.png
     black_images/0452.png
     black_images/0453.png
     black_images/0454.png
     black_images/0455.png
     black_images/0456.png
     black_images/0457.png
     black_images/0458.png
     black_images/0459.png
     black_images/0460.png
     black_images/0461.png
     black_images/0462.png
     black_images/0463.png
     black_images/0464.png
     black_images/0465.png
     black_images/0466.png
     black_images/0467.png
     black_images/0468.png
     black_images/0469.png
     images/male0001.png
     images/male0002.png
     images/male0003.png
     images/male0004.png
     images/male0005.png
     images/male0006.png
     images/male0007.png
     images/male0008.png
     images/male0009.png
     images/male0010.png
     images/male0011.png
     images/male0012.png
     images/male0013.png
     images/male0014.png
     images/male0015.png
     images/male0016.png
     images/male0017.png
     images/male0018.png
     images/male0019.png
     images/male0020.png
     images/male0021.png
     images/male0022.png
     images/male0023.png
     images/male0024.png
     images/male0025.png
     images/male0026.png
     images/male0027.png
     images/male0028.png
     images/male0029.png
     images/male0030.png
     images/male0031.png
     images/male0032.png
     images/male0033.png
     images/male0034.png
     images/male0035.png
     images/male0036.png
     images/male0037.png
     images/male0038.png
     images/male0039.png
     images/male0040.png
     images/male0041.png
     images/male0042.png
     images/male0043.png
     images/male0044.png
     images/male0045.png
     images/male0046.png
     images/male0047.png
     images/male0048.png
     images/male0049.png
     images/male0050.png
     images/male0051.png
     images/male0052.png
     images/male0053.png
     images/male0054.png
     images/male0055.png
     images/male0056.png
     images/male0057.png
     images/male0058.png
     images/male0059.png
     images/male0060.png
     images/male0061.png
     images/male0062.png
     images/male0063.png
     images/male0064.png
     images/male0065.png
     images/male0066.png
     images/male0067.png
     images/male0068.png
     images/male0069.png
     images/male0070.png
     images/male0071.png
     images/male0072.png
     images/male0073.png
     images/male0074.png
     images/male0075.png
     images/male0076.png
     images/male0077.png
     images/male0078.png
     images/male0079.png
     images/male0080.png
     images/male0081.png
     images/male0082.png
     images/male0083.png
     images/male0084.png
     images/male0085.png
     images/male0086.png
     images/male0087.png
     images/male0088.png
     images/male0089.png
     images/male0090.png
     images/male0091.png
     images/male0092.png
     images/male0093.png
     images/male0094.png
     images/male0095.png
     images/male0096.png
     images/male0097.png
     images/male0098.png
     images/male0099.png
     images/male0100.png
     images/male0101.png
     images/male0102.png
     images/male0103.png
     images/male0104.png
     images/male0105.png
     images/male0106.png
     images/male0107.png
     images/male0108.png
     images/male0109.png
     images/male0110.png
     images/male0111.png
     images/male0112.png
     images/male0113.png
     images/male0114.png
     images/male0115.png
     images/male0116.png
     images/male0117.png
     images/male0118.png
     images/male0119.png
     images/male0120.png
     images/male0121.png
     images/male0122.png
     images/male0123.png
     images/male0124.png
     images/male0125.png
     images/male0126.png
     images/male0127.png
     images/male0128.png
     images/male0129.png
     images/male0130.png
     images/male0131.png
     images/male0132.png
     images/male0133.png
     images/male0134.png
     images/male0135.png
     images/male0136.png
     images/male0137.png
     images/male0138.png
     images/male0139.png
     images/male0140.png
     images/male0141.png
     images/male0142.png
     images/male0143.png
     images/male0144.png
     images/male0145.png
     images/male0146.png
     images/male0147.png
     images/male0148.png
     images/male0149.png
     images/male0150.png
     images/male0151.png
     images/male0152.png
     images/male0153.png
     images/male0154.png
     images/male0155.png
     images/male0156.png
     images/male0157.png
     images/male0158.png
     images/male0159.png
     images/male0160.png
     images/male0161.png
     images/male0162.png
     images/male0163.png
     images/male0164.png
     images/male0165.png
     images/male0166.png
     images/male0167.png
     images/male0168.png
     images/male0169.png
     images/male0170.png
     images/male0171.png
     images/male0172.png
     images/male0173.png
     images/male0174.png
     images/male0175.png
     images/male0176.png
     images/male0177.png
     images/male0178.png
     images/male0179.png
     images/male0180.png
     images/male0181.png
     images/male0182.png
     images/male0183.png
     images/male0184.png
     images/male0185.png
     images/male0186.png
     images/male0187.png
     images/male0188.png
     images/male0189.png
     images/male0190.png
     images/male0191.png
     images/male0192.png
     images/male0193.png
     images/male0194.png
     images/male0195.png
     images/male0196.png
     images/male0197.png
     images/male0198.png
     images/male0199.png
     images/male0200.png
     images/male0201.png
     images/male0202.png
     images/male0203.png
     images/male0204.png
     images/male0205.png
     images/male0206.png
     images/male0207.png
     images/male0208.png
     images/male0209.png
     images/male0210.png
     images/male0211.png
     images/male0212.png
     images/male0213.png
     images/male0214.png
     images/male0215.png
     images/male0216.png
     images/male0217.png
     images/male0218.png
     images/male0219.png
     images/male0220.png
     images/male0221.png
     images/male0222.png
     images/male0223.png
     images/male0224.png
     images/male0225.png
     images/male0226.png
     images/male0227.png
     images/male0228.png
     images/male0229.png
     images/male0230.png
     images/male0231.png
     images/male0232.png
     images/male0233.png
     images/male0234.png
     images/male0235.png
     images/male0236.png
     images/male0237.png
     images/male0238.png
     images/male0239.png
     images/male0240.png
     images/male0241.png
     images/male0242.png
     images/male0243.png
     images/male0244.png
     images/male0245.png
     images/male0246.png
     images/male0247.png
     images/male0248.png
     images/male0249.png
     images/male0250.png
     images/male0251.png
     images/male0252.png
     images/male0253.png
     images/male0254.png
     images/male0255.png
     images/male0256.png
     images/male0257.png
     images/male0258.png
     images/male0259.png
     images/male0260.png
     images/male0261.png
     images/male0262.png
     images/male0263.png
     images/male0264.png
     images/male0265.png
     images/male0266.png
     images/male0267.png
     images/male0268.png
     images/male0269.png
     images/male0270.png
     images/male0271.png
     images/male0272.png
     images/male0273.png
     images/male0274.png
     images/male0275.png
     images/male0276.png
     images/male0277.png
     images/male0278.png
     images/male0279.png
     images/male0280.png
     images/male0281.png
     images/male0282.png
     images/male0283.png
     images/male0284.png
     images/male0285.png
     images/male0286.png
     images/male0287.png
     images/male0288.png
     images/male0289.png
     images/male0290.png
     images/male0291.png
     images/male0292.png
     images/male0293.png
     images/male0294.png
     images/male0295.png
     images/male0296.png
     images/male0297.png
     images/male0298.png
     images/male0299.png
     images/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 769;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `643% top`,
    scroller: `#main`,
    // markers: true
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `643% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})