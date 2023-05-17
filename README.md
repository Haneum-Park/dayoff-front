##### 사용 디자인패턴

- VAC (View - Assets - Component)
- Atomic (Atom - Molecule - Organism - Template - Page)
  - 기존 Atomic 디자인 패턴에서 Molecule, Organism, Template을 제거하고 Block 단위를 추가해 적용
  - Proxy 상태관리를 사용하여 props drilling을 방지
- Presentational and Container Components
  - Presentational Components : UI를 담당하는 컴포넌트
  - Container Components : Presentational Components를 감싸고 데이터를 주입하는 컴포넌트

---

요약하여 설명하면, Input, Image 등 가장 작은 단위부터 Page까지 올라가고, Page에서 쓰에는 대부분의 state들은 Valtio로 가져간다.
이 때 사용되는 state들은 Presentational Components에서 불러와 Object화 시킨 후 Container Components에 주입하는 방식으로 구현하였다.
이렇게 되면 Atomic 방식을 유지하면서 props drilling을 방지할 수 있고 Presentational and Container 방식을 구현해 prop가 비대해지는걸 방지 할 수 있다.
즉, 하나의 컴포넌트는 폴더 안에 index.tsx, style.ts, script.ts를 가진다.
단, 코드량이 적은 컴포넌트는 분리하지 않는다.
