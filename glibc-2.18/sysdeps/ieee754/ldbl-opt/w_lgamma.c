#include <math_ldbl_opt.h>
#include <math/w_lgamma.c>
#if LONG_DOUBLE_COMPAT(libm, GLIBC_2_0)
compat_symbol (libm, __lgamma, lgammal, GLIBC_2_0);
compat_symbol (libm, __gamma, gammal, GLIBC_2_0);
#endif
