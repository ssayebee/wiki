---
layout  : wiki
title   : Vimwiki 사용법
summary : 
date    : 2020-07-22 00:13:28 +0900
updated : 2020-07-30 21:50:43 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# VimWiki 사용법

## Wiki Management
1. [number] <leader> ww : open wiki index file
2. [nubeer] <leader> wt : open wiki index file in new tab
3. <leader> ws : list and select avaliable wikis
4. <leader> wd : delete wiki page
5. <leader> wr : rename wiki page

## Diary Management
1. [number] <leader> wi : open diary index file for wiki
2. <leader> w <leader> i : update current diary index
3. [number] <leader> w <leader> w : open today's diary file for wiki
4. [number] <leader> w <leader> t : open today's diary file for wiki in new tab
5. <C-Up> : open previous day's diary
6. <C-Down> : open next day's diary

## Navigation
1. <CR> : follow/create wiki link
2. <C-S-CR> : follow/create wiki link in new tab
3. <backspace> : go back to previous wiki page
4. <Tab> : go to next link on current page
5. <S-Tab> : go to previous link on current page

## Editing shortcuts
1. <C-Space> : toggle list item on/off
2. `=` :  add header level
3. `-` : remove header level
4. `+` : create/decoate links
5. glm : increase indent of list item
6. gll : decrease indent of list item
7. gl* : or gl8 switch or insert "*" symbol
8. gl# : or gl3 switch or insert "#" symbol
9. gl- : switch or insert "-" symbol
10. gl1 : switch or insert "1." symbol

## Table Shortcuts
1. <A-Left> : move column left
2. <A-Right> : move column right 
3. <CR> : (insert mode) go down/create cell
4. <Tab> : (insert mode) go next/ create cell
5. gqq or gww : reformat table

## Text Objects
1. ah : section between 2 headings including empty tralling lines
2. ih : section between 2 headings excluding empty tralling lines
3. a\ : table cell
4. i\ inner table cell
5. ac : table column 
6. ic : inner table column
