---
layout  : wiki
title   : Vim 사용법
summary : 
date    : 2020-07-29 17:57:31 +0900
updated : 2020-07-31 18:00:10 +0900
tags    : [vim]
---

# Vim 사용법

## 1. 커서 이동
* `h`: 왼쪽
* `j`: 아래
* `k`: 위쪽
* `l`: 오른쪽

## 2. 파일에서 커서, 화면 이동
* `^E`: 위로 이동 (커서 위치 유지)
* `^Y`: 아래로 이동 (커서 위치 유지)
* `^F`
* `^B`
* `{Num} + G`: 해당 라인 위치로 이동

## 3. 편집의 기초
### Insert Mode 
* `i`: 커서 위치에 삽입
* `a`: 커서 다음 위치에 삽입
* `I`: 행의 맨앞 위치에 삽입
* `A`: 행의 마지막 위치에 삽입

ESC가 눌러지기 까지 하나의 수정단위가 된다.
u를 누른 경우 해당 명령이 undo가 된다.

## 4. 반복 명령
* `.` 가장 마지막에 수행한 명령을 재실행

## 5. Command Line 모드
* `:q`: 종료
* `:w`: 저장
* `:w`: 저장
* `:qw`: 저장 후 종료

## 6. 한 줄 삭제, 단어 삭제
* `dd`: 한 줄 삭제
* `dw`: 단어 삭제
* `u`: 하나의 편집 단위를 undo
* `U`: 한 줄의 모든 수정을 undo

## 7. 블럭설정하기
* `v`: hjkl을 이용한 블럭 설정
* `V`: line 단위로 Visual 블럭 설정
* `^V`: 세로 단위 Visual 블럭 설정

## 8. 간단한 편집(replace, changem, one-mode)
* `r`: 하나의 문자를 변경
* `R`: 현재 커서위치로 부터 덮어쓰기
* `cc`: 현재 라인 삭제 후 입력 모드
* `cw`: 단어 삭제 후 삽입 모드
* `o`: 현재 커서 아래에 줄 삽입 후 입력 모드
* `O`: 현재 커서 위에 줄 삽입 후 입력 모드

## 9. 복사 붙이기, 삭제 후 붙이기, 레지스터
* `p`: 현재 커서 아랫 줄에 붙여 넣기
* `P`: 현재 커서 위치에 붙여 넣기
* `yy`: 한 줄 복사
* `Y`: 한 줄 복사

## 10. 작업파일 전환, 디렉토리 열기
* `vim {dir}`: vim은 파일이 아닌 디렉토리도 실행 할 수 있다.
* `:e {fileName}`: 해당 파일 열기
* `^L`: 화면 다시 그리기
* `^C`: 작업중인 파일 확인하기

## 11. 창을 분할하여 편집하기 기초
* `:sp`: 창을 수평으로 분할
* `:vsp`: 창을 수직으로 분할
* `^WW`: 분할 되어있는 창 이동
* `^WJ`: 창 이동 j 방향
* `^WK`: 창 이동 k 방향
* `^WH`: 창 이동 h 방향
* `^WL`: 창 이동 l 방향
* `^WC`: 현재 창 닫기

## 12. 창 분할, 창 크기 조정
* `^W=`: 화면의 크기를 동등하게

- 수평으로 확장한 경우(`:sp`)
* `^W_`: 현재 화면을 전체 화면으로
* `{num}^W_`: 원하는 라인 수 만큼 확장

- 수직으로 확장한 경우(`:vsp`)
* `^W|`: 현재 화면을 전체 화면으로
* `{num}^W|`: 원하는 라인 수 만큼 확장

## 13. 파일 비교하기
`vimdiff a.c b.c`
* `l`: 변경 사항이 없는 같은 내용은 holding이 되어있는데, 접는 선에서 l을 누르면 해제할 수 있다.
* `dp`: 다른 창으로 diff 내용 보내기
* `do`: 다른 창에서 diff 내용 가져오기

## 14. Explore, Split explore
* `Ex` or `Explore`: 작업중인 파일에서 다른 디렉토리 열기
* `Se`: 분할된 창으로 다른 디렉토리 열기

## 15. 디렉토리 명령어 RDdo
해당 변경할 디렉토리를 연다 `:Ex`
* `R`: 이름 변경하기
* `D`: 삭제 하기
* `^WO`: 현재 커서가 위치한 윈도우를 제외한 나머지 모두 닫기

## 16. 찾기, 단어찾기
* `/{str}`: 찾고 싶은 문자열 검색
* `?{str}`: 찾고 싶은 문자열 역방향 검색
* `n`: 다음 문자열
* `N`: 이전 문자열
* `*`: 커서가 위치한 단어 검색
* `#`: 커서가 위치한 역방향 단어 검색

## 17. man page, pydoc 확인하기
* `K`: 해당 단어의 메뉴얼
* `{num}+K`: 원하는 번호의 메뉴얼
* pydoc 파이썬 메뉴얼 프로그램
* *.py 파일에서 `K`실행 시 pydoc이 실행됨

## 18. 커서 밑 파일 열기
* `^WF`: 해당 경로의 파일이 열림
* `:set isfname` 해당 변수를 통해 파일을 판단

## 19. 버퍼 이용하기 1
* `:ls`, `:buffers`, `:files`
* 현재 열려있는 버퍼는 %
* 직전에 열려있는 버퍼는 #
* a는 active 상태를 나타냄
* `:sb+{num}` 버퍼에 있는파일을 스플릿 하여 열기 
* `:ls!` (Unlist 버퍼까지 보기) 

## 20. 버퍼 이용하기 2
* `Ctrl-^`, `:b N` 이전 버퍼에 있는 파일 열기
 
## 21. 레지스터
* 윈도우에서의 클립보드와 유사
* vim이 종료 되어도 (~/.viminfo) 에 저장 되어 있기 때문에 다시 불러 올 수 있음
* `:reg` register에 저장 된 목록 보기
  * `0`: 복사를 할 때 사용하는 레지스터
  * `1`: 삭제를 할 때 사용하는 레지스터
  * `""`: 마지막에 사용한 레지스터 (Default)
  * 복사 레지스터와 달리 삭제 레지스터는 목록이 늘어나면 밑으로 쉬프팅  된다.
* `"+{num}+p` : {num}에 저장되어 있는 레지스터 붙여 넣기
* `:wv`를 통해 현재 레지스터를 저장할 수 있다. (~/.viminfo)
* `:wv`이후 다른 파일을 열고 ``:rv`를 이용하면 해당 레지스터값을 이용할 수 있다.

## 22. 사용자 레지스터
(수정중)

---

## 추가 팁
윈도우에서 Caps Lock키를 ESC로 사용하기 위해서 여러가지 방법이 있지만, AutoHotkey라는 프로그램을 사용하면, 굉장히 편리한 스크립트를 사용할 수 있다. vim을 사용하다 보면, 한글일 때 명령어가 입력되지 않는 경험을 모두 해봤을 것이다. ex) :w -> :ㅈ 
아래의 AutoHotkey를 설치해서 아래의 스크립트를 이용하면 Esc를 CapsLock키와 변경해 줌과 동시에 해당 키를 눌렀을 경우 한글 입력모드라면 영어입력 모드로 변경해 준다.
```
$CapsLock::
	Send, {ESC}
    if(IME_CHECK("A"))
        Send, {VK15}    ;영문이라면 한영전환 키를 입력해준다.
    return

/*
  IME check 
*/
IME_CHECK(WinTitle) {
  WinGet,hWnd,ID,%WinTitle%
  Return Send_ImeControl(ImmGetDefaultIMEWnd(hWnd),0x005,"")
}
Send_ImeControl(DefaultIMEWnd, wParam, lParam) {
  DetectSave := A_DetectHiddenWindows
  DetectHiddenWindows,ON
   SendMessage 0x283, wParam,lParam,,ahk_id %DefaultIMEWnd%
  if (DetectSave <> A_DetectHiddenWindows)
      DetectHiddenWindows,%DetectSave%
  return ErrorLevel
}
ImmGetDefaultIMEWnd(hWnd) {
  return DllCall("imm32\ImmGetDefaultIMEWnd", Uint,hWnd, Uint)
}
```

# Vim 설정하기

Linux의 경우 ~(/home/{user}) 경로에서 `.vimrc`라는 파일을 생성해서 개인 환경 설정을 진행한다.

아래는 필자가 사용하는 간단한 설정 내용이다.

* `set number`: line number를 화면에 표시한다.
* `set smartindent`: smart한 들여쓰기
* `set tabstop=2`: tab의 크기를 2로 지정한다.
* `set expandtab`: tab을 띄워 쓰기로 대체한다. (ex: tabstop=2 인 경우 띄어쓰기 두 칸)
* `set shiftwidth=2`: >> 또는 << 키로 들여쓰기 할때, 스페이스 갯수를 설정

--- 
