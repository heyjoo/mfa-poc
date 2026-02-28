다음 절차에 따라 현재 작업 내용을 git commit한다.

## 1. 변경 사항 파악

아래 정보를 수집한다.

```
git status
git diff
git diff --cached
```

커밋할 변경 사항이 없으면 사용자에게 알리고 종료한다.

## 2. 커밋 메시지 작성 규칙

**형식:**
```
<type>(<scope>): <subject>

<body>
```

**type** — 변경 성격 (영문 소문자):
- `feat`: 새 기능
- `fix`: 버그 수정
- `refactor`: 동작 변경 없는 코드 개선
- `docs`: 문서 변경
- `chore`: 빌드, 설정, 의존성 등

**scope** — 변경된 주요 영역. 변경 파일 경로를 기반으로 추론한다.
예) `shell`, `remote-about`, `remote-dashboard`, `workspace`

**subject** — 영문, 현재형, 50자 이내. 마침표 없음.

**body** — 한글로 작성. "무엇을"보다 "왜" 변경했는지를 설명한다. 줄당 72자 이내.

## 3. 실행

1. `git add`로 관련 파일을 스테이징한다. 민감한 파일(`.env` 등)은 제외한다.
2. 작성한 메시지로 커밋한다.
3. `git status`로 커밋 완료를 확인한다.
