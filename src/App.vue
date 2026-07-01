<script setup lang="ts">
import { ref } from 'vue'
import heroImage from './assets/study-hero.webp'

const navItems = [
  { label: '个人介绍', id: 'intro' },
  { label: '伴学辅导', id: 'tutoring' },
  { label: 'PPT制作', id: 'ppt' },
  { label: '联系方式', id: 'contact' },
]

const tags = ['大学生暑假伴读', '学习伙伴', '监督陪伴', 'PPT设计服务']

const strengths = [
  {
    title: '山西大学本科在读',
    text: '学习能力扎实，知识体系完整，值得信赖',
  },
  {
    title: '年龄差距小，容易沟通',
    text: '与孩子更亲近，沟通更顺畅，更容易建立信任',
  },
  {
    title: '计算机专业背景',
    text: '逻辑思维强，擅长讲解复杂问题',
  },
  {
    title: '学习习惯培养',
    text: '制定学习计划，监督执行，帮助养成自律习惯',
  },
  {
    title: '蓝桥杯省二等奖',
    text: '具备较强的学习能力与解决问题能力',
  },
  {
    title: '暑假期间认真负责',
    text: '时间充足，全程陪伴与跟进',
  },
]

const supervisionItems = [
  '监督学习状态',
  '帮忙规划学习进度',
  '孩子不会时可简单答疑',
  '培养学习习惯',
]

const oneOnOneItems = [
  '主动讲解知识点',
  '针对性辅导',
  '配套例题与练习巩固',
  '查漏补缺',
]

const coursePrices = [
  { subject: '小学英语', prices: ['1小时 50元', '2小时 95元'] },
  { subject: '小学数学', prices: ['1小时 55元', '2小时 110元'] },
  { subject: '初中英语', prices: ['1小时 65元', '2小时 130元'] },
  { subject: '初中数学', prices: ['1小时 75元', '2小时 150元'] },
  { subject: 'C++编程入门', prices: ['1小时 100元', '2小时 195元'] },
]

const pptCases = ['竞选演讲PPT', '课程汇报PPT', '活动策划PPT', '班会展示PPT']
const pptPrices = ['1-10页：3元/页', '11-20页：4元/页', '20页以上：5元/页']
const addOns = ['中端设计 +1元/页', '精致设计 +2元/页', '高端设计 +8元/页', '无资料整理 +2元/页', '动态效果 ×2']
const pptNotes = ['高效交付：1-3个工作日出稿', '支持修改：免费修改2次', '品质保障：原创设计，满意为止', '可沟通需求：下单前充分沟通']

const menuOpen = ref(false)
const copied = ref(false)

function scrollToSection(id: string) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function copyWechat() {
  const value = '19735029089'

  try {
    await navigator.clipboard.writeText(value)
  } catch {
    const input = document.createElement('input')
    input.value = value
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }

  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
</script>

<template>
  <div class="min-h-screen overflow-hidden text-white">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-2xl">
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button class="flex items-center gap-3 text-left" type="button" @click="scrollToSection('intro')">
          <span class="flex h-10 w-10 items-center justify-center rounded-2xl border border-gold/45 bg-gold/15 text-sm font-black text-champagne shadow-lg shadow-gold/10">
            ZHao
          </span>
          <span class="leading-tight">
            <span class="block text-sm font-bold text-white">张昊森</span>
            <span class="block text-xs text-mist/60">伴学辅导网站</span>
          </span>
        </button>

        <div class="hidden items-center gap-1 md:flex">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="rounded-full px-4 py-2 text-sm font-medium text-mist/75 transition hover:bg-white/10 hover:text-white"
            type="button"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <button
          class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] md:hidden"
          type="button"
          aria-label="打开菜单"
          @click="menuOpen = !menuOpen"
        >
          <span class="relative h-4 w-5">
            <span
              class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition"
              :class="{ 'translate-y-2 rotate-45': menuOpen }"
            />
            <span
              class="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition"
              :class="{ 'opacity-0': menuOpen }"
            />
            <span
              class="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition"
              :class="{ '-translate-y-2 -rotate-45': menuOpen }"
            />
          </span>
        </button>
      </nav>

      <div v-if="menuOpen" class="border-t border-white/10 bg-navy/95 px-4 py-3 md:hidden">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-mist/85 hover:bg-white/10 hover:text-white"
          type="button"
          @click="scrollToSection(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </header>

    <main class="pt-16">
      <section id="intro" class="section-shell scroll-mt-20">
        <div class="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div class="fade-in">
            <p class="section-kicker">PERSONAL INTRODUCTION</p>
            <h1 class="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              你好，我是张昊森
            </h1>
            <p class="mt-5 text-lg leading-8 text-champagne sm:text-xl">
              山西大学 · 计算机科学与技术（先进计算方向）专业在读
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <span
                v-for="tag in tags"
                :key="tag"
                class="rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-semibold text-champagne"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-8 space-y-4 text-base leading-8 text-mist/78">
              <p>
                我是一名计算机专业在读大学生，性格开朗、责任心强、耐心细致，善于沟通与引导。
              </p>
              <p>
                我能根据孩子的学习情况提供针对性的学习建议与规划，帮助养成良好学习习惯，提升学习效率。
              </p>
              <p>同时，我也提供专业的 PPT 设计服务，助力内容更出彩。</p>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <button class="gold-button" type="button" @click="scrollToSection('contact')">立即预约</button>
              <button class="ghost-button" type="button" @click="scrollToSection('tutoring')">查看服务</button>
            </div>
          </div>

          <div class="fade-in-delay">
            <div class="glass-card hover-lift relative overflow-hidden p-3">
              <img
                class="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                :src="heroImage"
                alt="学习辅导与PPT设计服务视觉图"
              />
              <div class="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-navy/70 p-4 backdrop-blur-xl">
                <p class="text-sm font-semibold text-champagne">暑假伴学 · PPT设计</p>
                <p class="mt-1 text-xs leading-5 text-mist/70">耐心陪伴、规划跟进、讲解提升，让学习节奏更稳。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in strengths" :key="item.title" class="glass-card hover-lift p-5">
            <p class="text-base font-bold text-white">{{ item.title }}</p>
            <p class="mt-2 text-sm leading-6 text-mist/70">{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="tutoring" class="section-shell scroll-mt-20">
        <div class="max-w-2xl">
          <p class="section-kicker">TUTORING</p>
          <h2 class="section-title">伴学辅导</h2>
          <p class="section-subtitle">科学陪伴 · 高效学习 · 共同进步</p>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          <article class="glass-card hover-lift p-6">
            <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-sm font-semibold text-gold">服务一</p>
                <h3 class="mt-2 text-2xl font-bold text-white">小初陪读监督</h3>
              </div>
              <div class="rounded-3xl border border-gold/30 bg-gold/10 p-4 text-champagne">
                <p class="text-sm">2小时 <span class="text-2xl font-black">50元</span></p>
                <p class="mt-1 text-sm">3小时 <span class="text-2xl font-black">70元</span></p>
              </div>
            </div>

            <div class="mt-6 grid gap-3">
              <p v-for="item in supervisionItems" :key="item" class="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-mist/78">
                {{ item }}
              </p>
            </div>

            <div class="mt-6 rounded-3xl bg-white/[0.05] p-4">
              <p class="text-sm font-bold text-white">适合</p>
              <p class="mt-2 text-sm leading-6 text-mist/70">
                跟网课学习、完成练习、需要有人监督、自律性需要培养的孩子。
              </p>
            </div>
          </article>

          <article class="glass-card hover-lift p-6">
            <div>
              <p class="text-sm font-semibold text-gold">服务二</p>
              <h3 class="mt-2 text-2xl font-bold text-white">一对一讲解</h3>
            </div>

            <div class="mt-6 grid gap-3">
              <div
                v-for="course in coursePrices"
                :key="course.subject"
                class="rounded-3xl border border-white/10 bg-white/[0.055] p-4"
              >
                <p class="font-bold text-white">{{ course.subject }}</p>
                <div class="mt-3 grid grid-cols-2 gap-2 text-sm text-champagne">
                  <span v-for="price in course.prices" :key="price" class="rounded-2xl bg-gold/10 px-3 py-2">
                    {{ price }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article class="glass-card hover-lift p-6">
            <p class="text-lg font-bold text-white">讲解内容</p>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <p v-for="item in oneOnOneItems" :key="item" class="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-mist/78">
                {{ item }}
              </p>
            </div>
            <p class="mt-6 text-sm font-bold text-white">适合</p>
            <p class="mt-2 text-sm leading-6 text-mist/70">
              需要系统讲解、基础巩固、重点提升、错题讲解的孩子。
            </p>
          </article>

          <article class="glass-card hover-lift p-6">
            <p class="text-lg font-bold text-white">成绩参考</p>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-3xl bg-white/[0.06] p-4">
                <p class="text-xs text-mist/60">中考数学</p>
                <p class="mt-1 text-2xl font-black text-champagne">116</p>
              </div>
              <div class="rounded-3xl bg-white/[0.06] p-4">
                <p class="text-xs text-mist/60">中考英语</p>
                <p class="mt-1 text-2xl font-black text-champagne">118</p>
              </div>
              <div class="rounded-3xl bg-white/[0.06] p-4">
                <p class="text-xs text-mist/60">高考数学</p>
                <p class="mt-1 text-2xl font-black text-champagne">112</p>
              </div>
              <div class="rounded-3xl bg-white/[0.06] p-4">
                <p class="text-xs text-mist/60">高考英语</p>
                <p class="mt-1 text-2xl font-black text-champagne">125</p>
              </div>
            </div>
          </article>
        </div>

        <div class="glass-card mt-5 p-6">
          <p class="text-sm leading-7 text-mist/76">
            陪读以监督学习、规划进度、简单答疑为主；一对一讲解为主动授课型辅导。可根据孩子情况灵活安排时间与学习内容。可加 v 沟通。
          </p>
        </div>
      </section>

      <section id="ppt" class="section-shell scroll-mt-20">
        <div class="max-w-2xl">
          <p class="section-kicker">PRESENTATION DESIGN</p>
          <h2 class="section-title">PPT制作</h2>
          <p class="section-subtitle">专业设计 · 高效出稿 · 满意为止</p>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article class="glass-card hover-lift p-6">
            <p class="text-lg font-bold text-white">服务内容</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <span class="rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold text-champagne">PPT制作</span>
              <span class="rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold text-champagne">PPT美化</span>
              <span class="rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold text-champagne">排版优化</span>
            </div>

            <p class="mt-8 text-lg font-bold text-white">案例展示</p>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <p v-for="item in pptCases" :key="item" class="rounded-3xl bg-white/[0.06] p-4 text-sm font-semibold text-mist/82">
                {{ item }}
              </p>
            </div>

            <p class="mt-8 rounded-3xl border border-gold/30 bg-gold/10 p-4 text-sm font-bold text-champagne">
              闲鱼店铺：木星设计
            </p>
          </article>

          <article class="glass-card hover-lift p-6">
            <p class="text-lg font-bold text-white">价格</p>
            <div class="mt-4 grid gap-3 sm:grid-cols-3">
              <div v-for="item in pptPrices" :key="item" class="rounded-3xl bg-white/[0.06] p-4 text-sm font-bold text-champagne">
                {{ item }}
              </div>
            </div>

            <p class="mt-8 text-lg font-bold text-white">附加服务</p>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <p v-for="item in addOns" :key="item" class="rounded-3xl bg-white/[0.055] p-4 text-sm text-mist/78">
                {{ item }}
              </p>
            </div>

            <p class="mt-8 text-lg font-bold text-white">服务说明</p>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <p v-for="item in pptNotes" :key="item" class="rounded-3xl bg-white/[0.055] p-4 text-sm text-mist/78">
                {{ item }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section-shell scroll-mt-20 pb-20">
        <div class="glass-card overflow-hidden">
          <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div class="bg-white/[0.045] p-6 sm:p-8 lg:p-10">
              <p class="section-kicker">CONTACT</p>
              <h2 class="section-title">联系方式</h2>
              <p class="section-subtitle">欢迎加微信沟通孩子情况、时间安排和具体需求。</p>
            </div>

            <div class="p-6 sm:p-8 lg:p-10">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                  <p class="text-sm text-mist/60">微信</p>
                  <p class="mt-2 break-all text-2xl font-black text-champagne">19735029089</p>
                </div>
                <div class="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                  <p class="text-sm text-mist/60">电话</p>
                  <p class="mt-2 break-all text-2xl font-black text-champagne">19735029089</p>
                </div>
              </div>

              <div class="mt-6 grid gap-3 sm:grid-cols-3">
                <button class="gold-button w-full" type="button" @click="copyWechat">复制微信号</button>
                <a class="ghost-button w-full" href="tel:19735029089">电话咨询</a>
                <button class="ghost-button w-full" type="button" @click="scrollToSection('contact')">立即预约</button>
              </div>

              <p
                class="mt-4 h-6 text-center text-sm font-semibold text-champagne transition"
                :class="copied ? 'opacity-100' : 'opacity-0'"
              >
                微信号已复制
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
