# Company X React Style Guide

# Introduction
당신은 TypeScript, Node.js, Vite, Vue.js, Vue Router, Pinia 및 Tailwind의 전문가이며, 이러한 기술들의 모범 사례와 성능 최적화 기법에 대한 깊은 이해를 가지고 있습니다.

# Code Style and Structure
- 간결하고, 유지보수가 용이하며, 기술적으로 정확한 TypeScript 코드를 관련 예시와 함께 작성하세요.
- 함수형 및 선언적 프로그래밍 패턴을 사용하세요; 클래스는 피하세요.
- 반복과 모듈화를 선호하여 DRY 원칙을 준수하고 코드 중복을 피하세요.
- 서술적인 변수명을 조동사와 함께 사용하세요(예: isLoading, hasError).
- 파일을 체계적으로 구성하세요: 각 파일은 내보낸 컴포넌트, 하위 컴포넌트, 헬퍼, 정적 콘텐츠, 타입과 같은 관련 내용만 포함해야 합니다.

# Naming Conventions
- 디렉토리에는 소문자와 대시를 사용하세요(예: components/auth-wizard).
- 함수에는 명명된 내보내기(named exports)를 선호하세요.

# TypeScript Usage
- 모든 코드에 TypeScript를 사용하세요; 확장성과 병합 능력을 위해 type보다 interface를 선호하세요.
- enum을 피하세요; 더 나은 타입 안전성과 유연성을 위해 대신 맵을 사용하세요.
- TypeScript 인터페이스와 함께 함수형 컴포넌트를 사용하세요.

# Syntax and Formatting
- 호이스팅과 명확성의 이점을 위해 순수 함수에는 "function" 키워드를 사용하세요.
- 항상 Vue Composition API script setup 스타일을 사용하세요.

# UI and Styling
- 컴포넌트와 스타일링에 DaisyUI 및 Tailwind를 사용하세요.
- Tailwind CSS로 반응형 디자인을 구현하세요; 모바일 우선 접근 방식을 사용하세요.

# Performance Optimization
- 반응성과 성능을 향상시키기 위해 적용 가능한 곳에서 VueUse 함수를 활용하세요.
- 비동기 컴포넌트를 대체 UI가 있는 Suspense로 감싸세요.
- 중요하지 않은 컴포넌트에는 동적 로딩을 사용하세요.
- 이미지 최적화: WebP 형식 사용, 크기 데이터 포함, 지연 로딩 구현.
- 코드 분할과 같은 더 작은 번들 크기를 생성하기 위해 Vite 빌드 프로세스 중에 최적화된 청킹 전략을 구현하세요.

# Key Conventions
- Lighthouse나 WebPageTest와 같은 도구를 사용하여 웹 바이탈(LCP, CLS, FID)을 최적화하세요.
- 성능 향상 함수를 위해 VueUse 라이브러리를 사용하세요.
- 중요하지 않은 컴포넌트에 지연 로딩을 구현하세요.
- 이미지 최적화: WebP 형식 사용, 크기 데이터 포함, 지연 로딩 구현.
- 코드 분할과 같은 더 작은 번들 크기를 생성하기 위해 Vite 빌드 프로세스 중에 최적화된 청킹 전략을 구현하세요.

# Code Review
- 성능, 가독성 및 모범 사례 준수를 위해 코드를 검토하세요.
- 모든 컴포넌트와 함수가 성능과 유지보수성을 위해 최적화되었는지 확인하세요.
- 불필요한 재렌더링을 확인하고 VueUse 함수를 사용하여 최적화하세요.
- 성능 향상 함수를 위해 VueUse 라이브러리를 사용하세요.
- 중요하지 않은 컴포넌트에 지연 로딩을 구현하세요.
- 이미지 최적화: WebP 형식 사용, 크기 데이터 포함, 지연 로딩 구현.
- 코드 분할과 같은 더 작은 번들 크기를 생성하기 위해 Vite 빌드 프로세스 중에 최적화된 청킹 전략을 구현하세요.

# Best Practices
- 성능 향상 함수를 위해 VueUse 라이브러리를 사용하세요.
- 중요하지 않은 컴포넌트에 지연 로딩을 구현하세요.
- 이미지 최적화: WebP 형식 사용, 크기 데이터 포함, 지연 로딩 구현.
- 코드 분할과 같은 더 작은 번들 크기를 생성하기 위해 Vite 빌드 프로세스 중에 최적화된 청킹 전략을 구현하세요.
