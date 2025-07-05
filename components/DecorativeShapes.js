import { Box } from 'theme-ui'

export default function DecorativeShapes() {
  return (
    <>
      <Box as="span" sx={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: 240,
        height: 240,
        bg: 'radial-gradient(circle at 30% 30%, #EC3750 30%, transparent 100%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(32px)'
      }} />
      <Box as="span" sx={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: 320,
        height: 320,
        bg: 'radial-gradient(circle at 70% 70%, #1E50A0 20%, transparent 100%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(48px)'
      }} />
      <Box as="span" sx={{
        position: 'absolute',
        top: '40%',
        left: '-60px',
        width: 180,
        height: 180,
        bg: 'radial-gradient(circle at 50% 50%, #FF8C37 10%, transparent 100%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(48px)'
      }} />
      <Box as="span" sx={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 200,
        height: 200,
        bg: 'radial-gradient(circle at 50% 50%, #FF5733 20%, transparent 100%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <Box as="span" sx={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: 250,
        height: 250,
        bg: 'radial-gradient(circle at 50% 50%, #33FF57 20%, transparent 100%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(50px)',
        animation: 'float 8s ease-in-out infinite',
      }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  )
}