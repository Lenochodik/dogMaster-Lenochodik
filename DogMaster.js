/*
@title: DogMaster
@author: Lenochodik
@tags: []
@addedOn: 2024-00-00
*/

// = Helper functions ==============================
// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
  }
  
  function getRandomItem(arr) {
    return arr[getRandomInt(0, arr.length)]
  }
  // =================================================
  
  // = Types =========================================
  const player = "p"
  const playerWithBonus = "+"
  const bowl = "b"
  
  const sausage = "s"
  const ham = "h"
  const bone = "n"
  const chocolate = "c"
  
  const tileLeft = "Q"
  const tileRight = "W"
  const tileUp = "E"
  const tileDown = "R"
  const tileCorner = "T"
  const tileOrnament = "Z"
  
  const tileEmpty = "1"
  const button2 = "2"
  const button3 = "3"
  const button4 = "4"
  const button5 = "5"
  const button6 = "6"
  const button7 = "7"
  const button8 = "8"
  const lifeIndicator = "9"
  const life = "0"
  const bonus = "*"
  const button11 = "-"
  // =================================================
  
  setLegend(
    [player, bitmap`
  ................
  .......111......
  .....11CCC11....
  ...11CCCCCCC11..
  ..1CCCCCCCCCCC1.
  ..1CC0CCCCC0CC1.
  .11CCCC000CCCC1.
  1C1CCC20002CCC1.
  1C1CC1220221CC1.
  12111100200111..
  1222166666661...
  .12CCCCCCCCCC1..
  .1CCCCCCCCCCCC1.
  .1CCCC22CCC22CC1
  .12CCC22CCC22CC1
  122CC222CCC222C1`],
    [playerWithBonus, bitmap`
  ................
  .......111......
  .....1155511....
  ...11555555511..
  ..1555555555551.
  ..1550555550551.
  .11555500055551.
  151555700075551.
  151551770771551.
  17111100700111..
  1777166666661...
  .1755555555551..
  .15555555555551.
  .155557755577551
  .175557755577551
  1775577755577751`],
    [sausage, bitmap`
  ................
  ................
  ...........CCCC.
  ...........C32CC
  ..........CC332C
  ..........C3332C
  .........CCC323C
  .......CCC33C3CC
  ......CC33C33CC.
  .CCCCCC3333C3C..
  C333C33C333CC...
  C3233C333CCC....
  .C323333CC......
  ..CCCCCC........
  ................
  ................`],
    [bowl, bitmap`
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ...CCCCCCCCCC...
  ..CCFFFFFFFFCC..
  .CFFFFFFFFFFFFC.
  .CCCFFFFFFFFCCC.
  .C9CCCCCCCCCC2C.
  .CF9F9F9F9F229C.
  .C9F9F9F9F9F9FC.
  ..C9F9F9F9F9FC..
  ...CCCCCCCCCC...`],
    [ham, bitmap`
  ................
  ................
  ................
  88333...........
  8822333......11.
  88823333....1221
  8883333311112221
  288323332222221.
  288333330LL12221
  88833333....1221
  88833333.....LL.
  8833333.........
  88333...........
  ................
  ................
  ................`],
    [chocolate, bitmap`
  ................
  ....CCCC........
  ...CC22CC.......
  ..CCCCC2CC......
  .CCCCCCC2CCL....
  .CCCCCCCCCL1LL..
  .CCCCCCC212331..
  ..CCCCCL133333..
  ...CCCC12133633.
  ...LCC112333363.
  ...LLL1213333933
  ..11L11333333393
  ...21L1333333933
  .....11.3333933.
  .........33333..
  ..........333...`],
    [bone, bitmap`
  ................
  ................
  ................
  ................
  .11..........11.
  1221........1221
  1222111111112221
  .12222222222221.
  L221LLLLLLLL1221
  L11L........L221
  .LL..........L1.
  ................
  ................
  ................
  ................
  ................`],
    // Tiles
    [tileLeft, bitmap`
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666`],
    [tileRight, bitmap`
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660`],
    [tileUp, bitmap`
  0000000000000000
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666`],
    [tileDown, bitmap`
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  0000000000000000
  FFFFFFFFFFFFFFFF
  FFFFFFFFFFFFFFFF
  FFFFFFFFFFFFFFFF
  FFFFFFFFFFFFFFFF
  0000000000000000`],
    [tileCorner, bitmap`
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF00000000000
  0FFF0FFFFFFFFFFF
  0FF0FFFFFFFFFFFF
  0F0FFFFFFFFFFFFF
  00FFFFFFFFFFFFFF
  0000000000000000`],
    [tileOrnament, bitmap`
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  0000000000000000
  FFFFFFFFFFFFFFFF
  FFFFFFFFFFFFFFFF
  0000000000000000`],
    [tileEmpty, bitmap`
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666
  6666666666666666`],
    // Buttons
    [button2, bitmap`
  0000066666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666
  0FFFF66666666666`],
    [button3, bitmap`
  0000000000000000
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666
  0FFFF06666666666`],
    [button4, bitmap`
  0000000000000000
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660`],
    [button5, bitmap`
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  6666666666666660
  0000000000000000
  FFFFFFFFFFFFFFF0
  FFFFFFFFFFFFFFF0
  FFFFFFFFFFFFFFF0
  FFFFFFFFFFFFFFF0
  0000000000000000`],
    [button6, bitmap`
  6666666666666666
  6666666666666666
  6666666666666666
  666688888888FF66
  666688882228FFF6
  66618H888828LFF6
  66118H888888LLF6
  66118H8888880LF6
  66118H8888880LF6
  66118HHHHH880LF6
  6611888888880166
  6611LLLLLLLL1166
  6661111111111666
  66666666FFFF6666
  6666666666666666
  6666666666666666`],
    [button7, bitmap`.`],
    [button8, bitmap`.`],
    [lifeIndicator, bitmap`
  6666666666666666
  6666666666666666
  6668886666888666
  6683338668333866
  6833323883322386
  6833332333332386
  8333333333333238
  8333333333333338
  8333323333233338
  6833332222333386
  6833323333233386
  6683333333333866
  6668333333338666
  6666883333886666
  6666668338666666
  6666666886666666`],
    [life, bitmap`
  ................
  ................
  ...888....888...
  ..83338..83338..
  .83332388332238.
  .83333233333238.
  8333333333333238
  8333333333333338
  8333323333233338
  .83333222233338.
  .83332333323338.
  ..833333333338..
  ...8333333338...
  ....88333388....
  ......8338......
  .......88.......`],
    [button11, bitmap`
  6666666666666660
  6666666666666660
  6666666666666660
  666688888888FF60
  666688882228FFF0
  66618H888828LFF0
  66118H888888LLF0
  66118H8888880LF0
  66118H8888880LF0
  66118HHHHH880LF0
  6611888888880160
  6611LLLLLLLL1160
  6661111111111660
  66666666FFFF6660
  6666666666666660
  6666666666666660`],
    // Others
    [bonus, bitmap`
  ..777777777777..
  .75555555577557.
  7555555557227557
  7556665555772757
  7565556555557277
  7565556555557277
  7555556555555757
  7555565565556557
  7555655556565557
  7556555555655557
  75655555565F5557
  756FFFF5F555F757
  7555555555557277
  7555555555572757
  .75555555555757.
  ..777777777777..`],
  )
  
  const fallingObjects = [sausage, ham, bone, chocolate, life, bonus]
  
  setSolids([
    tileLeft, tileRight, tileUp, tileDown, tileCorner, tileOrnament,
    tileEmpty, button2, button3, button4, button5, button6, button7, button8, lifeIndicator, button11,
  ])
  
  const melody = tune`
  375,
  375: C5^375 + E4~375,
  375: C5^375 + G4~375,
  375: C5^375 + E4~375,
  375: G4^375,
  375: A4^375 + E4~375,
  375: A4^375 + G4~375,
  375: G4^375 + E4~375,
  375,
  375: E5^375 + E4~375,
  375: E5^375 + G4~375,
  375: D5^375 + E4~375,
  375: D5^375,
  375: C5^375 + E4~375,
  375: G4~375,
  375: E4~375,
  6000`
  
  const melodyInf = tune`
  375,
  375: C5^375 + E4~375,
  375: C5^375 + G4~375,
  375: C5^375 + E4~375,
  375: G4^375,
  375: A4^375 + E4~375,
  375: A4^375 + G4~375,
  375: G4^375 + E4~375,
  375,
  375: E5^375 + E4~375,
  375: E5^375 + G4~375,
  375: D5^375 + E4~375,
  375: D5^375,
  375: C5^375 + E4~375,
  375: G4~375,
  375: E4~375,
  375,
  375: E4~375 + C5^375,
  375: G4~375 + C5^375,
  375: E4~375 + C5^375,
  375: G4^375,
  375: E4~375 + A4^375,
  375: G4~375 + A4^375,
  375: E4~375 + G4^375,
  375,
  375: E4~375 + E5^375,
  375: G4~375 + E5^375,
  375: E4~375 + D5^375,
  375: D5^375,
  375: E4~375 + C5^375,
  375: G4~375,
  375: E4~375`
  
  playTune(melodyInf)
  
  const melody2 = tune`
  300: C5^300,
  300: D5^300,
  300: E5^300,
  300: F5^300,
  300: G5^300,
  300: E5^300,
  300: F5^300,
  300: A5^300,
  300,
  300: G5^300,
  300,
  300: E5^300,
  300,
  300: C5^300,
  5400`
  
  const melodyWhileBonus = tune`.`
  
  const soundFalling = tune`
  162.16216216216216: E5^162.16216216216216 + A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: E5^162.16216216216216 + A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: A5~162.16216216216216,
  162.16216216216216: E5^162.16216216216216 + A5~162.16216216216216,
  3729.7297297297296`
  
  
  const soundDogMove = tune`
  78.94736842105263: A5-78.94736842105263,
  78.94736842105263: B5-78.94736842105263,
  2368.4210526315787`
  const sound3 = tune`
  500: C5/500 + A4~500,
  500: B4/500 + G4~500,
  500: G4/500 + E4~500,
  500: F4/500 + D4~500,
  500: E4~500,
  500: D4~500,
  500: E4~500,
  500: D4~500,
  12000`
  const sound4 = tune`
  68.3371298405467: D5-68.3371298405467,
  68.3371298405467: E5-68.3371298405467,
  68.3371298405467: F5-68.3371298405467,
  68.3371298405467: G5-68.3371298405467,
  68.3371298405467: A5-68.3371298405467,
  68.3371298405467: B5-68.3371298405467,
  1776.765375854214`
  const soundPickedUpChocolate = tune`
  100: E5/100 + C5-100,
  100: A4-100 + C5/100,
  100: F4/100 + A4-100,
  2900`
  const soundCollectedBonus = tune`
  115.83011583011583: B5~115.83011583011583 + G5~115.83011583011583 + F5~115.83011583011583 + A5^115.83011583011583 + E5-115.83011583011583,
  115.83011583011583: B5~115.83011583011583 + A5~115.83011583011583 + G5~115.83011583011583 + E5~115.83011583011583 + F5-115.83011583011583,
  115.83011583011583: A5~115.83011583011583 + F5~115.83011583011583 + E5~115.83011583011583 + B5^115.83011583011583 + G5-115.83011583011583,
  115.83011583011583: B5~115.83011583011583 + A5~115.83011583011583 + G5~115.83011583011583 + E5~115.83011583011583 + F5-115.83011583011583,
  115.83011583011583: F5~115.83011583011583 + E5~115.83011583011583 + B5^115.83011583011583 + G5-115.83011583011583 + A5-115.83011583011583,
  3127.4131274131273`
  const soundPickedUpBonus = tune`
  166.66666666666666: D5^166.66666666666666,
  166.66666666666666: G5-166.66666666666666 + B5^166.66666666666666,
  166.66666666666666: B5^166.66666666666666 + G5-166.66666666666666,
  166.66666666666666: B5^166.66666666666666 + G5-166.66666666666666,
  166.66666666666666: A5^166.66666666666666 + F5-166.66666666666666,
  166.66666666666666: A5^166.66666666666666 + F5-166.66666666666666,
  166.66666666666666: A5^166.66666666666666 + F5-166.66666666666666,
  166.66666666666666: B5^166.66666666666666 + G5-166.66666666666666,
  4000`
  const soundGameOver = tune`
  86.45533141210375: D5/86.45533141210375 + F5~86.45533141210375,
  86.45533141210375: C5/86.45533141210375 + E5~86.45533141210375,
  86.45533141210375: B4/86.45533141210375 + D5~86.45533141210375,
  86.45533141210375: A4/86.45533141210375 + C5~86.45533141210375,
  86.45533141210375: G4/86.45533141210375 + B4~86.45533141210375,
  86.45533141210375: F4/86.45533141210375 + A4~86.45533141210375,
  86.45533141210375: E4/86.45533141210375 + G4~86.45533141210375,
  86.45533141210375: D4/86.45533141210375 + F4~86.45533141210375,
  86.45533141210375: C4/86.45533141210375 + E4~86.45533141210375,
  86.45533141210375: C4~86.45533141210375,
  1902.0172910662825`
  const soundFellOnGroundOrHead = tune`
  83.33333333333333: E5/83.33333333333333,
  83.33333333333333: D5/83.33333333333333,
  83.33333333333333: C5/83.33333333333333,
  2416.6666666666665`
  const soundPickedUpLife = tune`
  96.7741935483871: C5^96.7741935483871,
  96.7741935483871: E5^96.7741935483871,
  96.7741935483871: G5^96.7741935483871,
  96.7741935483871: E5^96.7741935483871,
  96.7741935483871: G5/96.7741935483871,
  2612.9032258064517`
  const soundCollect = tune`
  77.51937984496124: E5-77.51937984496124 + C5~77.51937984496124,
  77.51937984496124: F5-77.51937984496124 + D5~77.51937984496124,
  2325.581395348837`
  
  
  let level = 0
  const levels = [
    map`
  3EEEEEEEEE4
  Q.....Q111W
  Q.....Q999W
  Q.....Q111W
  Q.....Q161W
  Q.....Q616W
  Q...pbQ161W
  TRRRRRRRRR5`
  ]
  
  setMap(levels[level])
  
  setPushables({
    [player]: []
  })
  
  
  let score = 0;
  
  function drawScoreText() {
    clearText()
    addText(`Score: ${score}`, {
      x: 2,
      y: 1,
      color: color`3`
    })
  }
  drawScoreText()
  
  
  const screenMinX = 1
  const screenMaxX = 5
  
  const screenMinY = 1
  const screenMaxY = 6
  
  const goodObjectScore = 10
  
  let playerObject = getFirst(player)
  const bowlObject = getFirst(bowl)
  
  const bonusDuration = 10 * 1000
  let bonusTimeout = null
  
  function changePlayerSprite(newType) {
    clearTile(playerObject.x, playerObject.y)
    addSprite(playerObject.x, playerObject.y, newType)
    playerObject = getFirst(newType)
  }
  
  const maxLives = 3
  let lives = maxLives
  const firstLifePosition = [screenMaxX + 2, 2]
  
  let gameTick = 0
  const gameSpeed = 1000
  
  const interval = setInterval(() => {
    gameTick++;
  
    // Move all falling objects down  
    for (const _type of fallingObjects) {
      const _objects = getAll(_type)
      for (const _object of _objects) {
        _object.y += 1
  
        // Object has fallen all the way down
        if (_object.y >= screenMaxY) {
          if (_object.x === bowlObject.x && _object.y === screenMaxY) {
            switch (_type) {
              case chocolate:
                lives--
                drawLives(lives)
  
                playTune(soundPickedUpChocolate)
                break
              case bonus:
                changePlayerSprite(playerWithBonus)
                playTune(soundPickedUpBonus)
  
                if(bonusTimeout !== null)
                  clearTimeout(bonusTimeout)
                
                bonusTimeout = setTimeout(() => {
                  changePlayerSprite(player)
                }, bonusDuration)
                break
              case life:
                lives = Math.min(lives + 1, maxLives)
                drawLives(lives)
  
                playTune(soundPickedUpLife)
                break
              default:
                score += goodObjectScore * (playerObject.type === playerWithBonus ? 2 : 1)
                playTune(soundCollect)
                drawScoreText()
                break
            }
            _object.remove()
          } else if (_object.x === playerObject.x && _object.y === screenMaxY) {
            playTune(soundFellOnGroundOrHead)
            lives--
            drawLives(lives)
  
            _object.remove()
          } else {
            if (_object.y > screenMaxY)
              _object.remove()
            else {
              if (_type !== bonus && _type !== life && _type !== chocolate) {
                playTune(soundFellOnGroundOrHead)
                lives--
                drawLives(lives)
              }
            }
          }
        }
      }
    }
  
    // Generate new falling object
    if (gameTick % 2 == 0) {
      const newFallingObject = getRandomItem(fallingObjects)
      addSprite(
        getRandomInt(screenMinX, screenMaxX + 1),
        screenMinY,
        newFallingObject
      )
    }
  }, gameSpeed)
  
  function drawLives(lives) {
    for (let x = 0; x < maxLives; x++) {
      const tmpX = firstLifePosition[0] + x
      const tmpY = firstLifePosition[1]
      clearTile(tmpX, tmpY)
      addSprite(tmpX, tmpY, (x + 1) <= lives ? lifeIndicator : tileEmpty)
    }
  
    if (lives === 0) {
      addText("Game\nOver", {
        x: screenMaxX + 9,
        y: firstLifePosition[1] + 1,
        color: color`0`
      })
  
      playTune(soundGameOver)
  
      clearInterval(interval)
    }
  }
  drawLives(lives)
  
  
  
  
  
  // Move left
  onInput("a", () => {
    if (bowlObject.x === screenMinX || lives <= 0)
      return;
  
    playerObject.x -= 1
    bowlObject.x -= 1
  
    if (playerObject.x < screenMinX)
      playerObject.x = screenMinX + 1
  
    playTune(soundDogMove);
  })
  
  // Move right
  onInput("d", () => {
    if (bowlObject.x === screenMaxX || lives <= 0)
      return;
  
    playerObject.x += 1
    bowlObject.x += 1
  
    if (playerObject.x === screenMaxX + 1)
      playerObject.x = screenMaxX - 1;
  
    playTune(soundDogMove);
  })
  
  afterInput(() => {
  
  })
