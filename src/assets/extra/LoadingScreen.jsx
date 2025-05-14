import React, { useEffect } from 'react'
import "./loading.module.style.css"

export default function LoadingScreen() {
  function Loading_Add() {
    const loadingScreen = document.getElementById("loadingScreen");
    const siteContent = document.getElementById("siteContent");
    loadingScreen.classList.add("hidden");
    siteContent.classList.add("loaded");
  }

  useEffect(() => {
    window.addEventListener("load", Loading_Add);
  }, []);

  return (
  <div class="loading-screen" id="loadingScreen">
    <div class="spinner">
    </div>
  </div>
  )
}
