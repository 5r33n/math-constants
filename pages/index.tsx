import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import React from "react"
import { csts } from "../constants/nums.ts"

const inter = Inter({ subsets: ["latin"] })

const colors = [
  "#EBAA08",
  "#EE9C0C",
  "#EA7C1A",
  "#E7511F",
  "#DF2E28",
  "#D91835",
  "#CE0043",
  "#BA0353",
  "#AA0A62",
  "#AD0962",
  "#9C2074",
  "#8A2B85",
  "#763E95",
  "#584EA4",
  "#4560A3",
  "#2D7699",
  "#1B898A",
  "#209976",
  "#2CA764",
  "#5CB05B",
  "#7EB851",
]

const getCosSin = (_deg): number[] => {
  const r = 50
  const rCos = r * Math.cos((_deg * Math.PI) / 180)
  const rSin = r * Math.sin((_deg * Math.PI) / 180)
  return [rCos, rSin]
}

let colorNum = 0

const drawLine = (_i, _ctx, _num, _x1, _y1): number[] => {
  _ctx.beginPath()
  _ctx.moveTo(_x1, _y1)
  const r = 50
  let newPos
  switch (_num) {
    case 0:
      newPos = [_x1, _y1 - getCosSin(90)[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 1:
      const cosSin = getCosSin(54)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 2:
      const cosSin = getCosSin(18)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 3:
      const cosSin = getCosSin(342)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 4:
      const cosSin = getCosSin(306)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 5:
      const cosSin = getCosSin(270)
      newPos = [_x1, _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 6:
      const cosSin = getCosSin(234)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 7:
      const cosSin = getCosSin(198)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 8:
      const cosSin = getCosSin(162)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
    case 9:
      const cosSin = getCosSin(126)
      newPos = [_x1 + cosSin[0], _y1 - cosSin[1]]
      _ctx.lineTo(newPos[0], newPos[1])
      break
  }

  _i % 50 == 0 && colorNum < 22 && colorNum++
  _ctx.strokeStyle = colors[colorNum]
  _ctx.stroke()
  return newPos
}

const drawCircle = (_ctx, _x, _y, _radius, _start) => {
  _ctx.beginPath()
  _ctx.arc(_x, _y, _radius, 0, 2 * Math.PI, false)
  _start ? (_ctx.strokeStyle = colors[0]) : (_ctx.strokeStyle = colors[19])
  _ctx.stroke()
}

export default function Home() {
  React.useEffect(() => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    //ctx.fillStyle = "whites"
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 2
    const link = document.getElementById("link")
    for (let j = 0; j < 1; j++) {
      colorNum = 0
      let newPos = csts[53][1]
      drawCircle(ctx, newPos[0], newPos[1], 5, true)

      for (let i = 0; i < 1420; i++) {
        newPos = drawLine(i, ctx, csts[53][0][i], newPos[0], newPos[1])
      }

      drawCircle(ctx, newPos[0], newPos[1], 5, false)

      link.setAttribute("download", j + ".png")
      link.setAttribute(
        "href",
        canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      )
      link.click()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <canvas id="canvas" width="4200" height="6200"></canvas>
        <a id="link"></a>
      </main>
    </>
  )
}
